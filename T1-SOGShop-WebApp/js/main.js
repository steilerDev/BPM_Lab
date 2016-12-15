var limit = 20;

function updateProducts() {
    $('#spinner').spin(spinnerOpts);
    $.soap({
        url: 'http://uni.steilergroup.net:3000/InventoryService/InventoryPort',
        method: 'listProducts',
        appendMethodToURL: false,
        namespaceURL: 'http://iaas.uni-stuttgart.de/labs/FlowSOG',

        data: {
            limit: limit
        },

        success: function (soapResponse) {
            $('#spinner').spin(false);
            $('#items').html("");

            var productList = soapResponse.toJSON()["#document"]["soap:Envelope"]["soap:Body"]["FlowSOG:listProductsResponse"]["FlowSOG:productList"]["FlowSOG:product"]
            for(var i in productList) {
                $('#items').append(
                    '<div class="col-sm-6 col-md-4">' +
                    '<div class="thumbnail equalize product" ' +
                        'data-id="' + productList[i]["FlowSOG:id"] + '"' +
                        'data-name="' + productList[i]["FlowSOG:name"] + '"' +
                        'data-price="' + productList[i]["FlowSOG:price"] + '"' +
                        'data-weight="' + productList[i]["FlowSOG:weight"] + '"' +
                    '">' +
                    '<div class="caption">' +
                    '<h4>' + productList[i]["FlowSOG:name"] + '</h4>' +
                    '<p>Price: ' + productList[i]["FlowSOG:price"] + '€<p>' +
                    '<p> Weight: ' + productList[i]["FlowSOG:weight"] + 'gr</p>' +
                    '<div class="input-group">' +
                    '<input type="text" class="form-control" placeholder="Quantity">' +
                    '<span class="input-group-btn">' +
                    '<button class="btn btn-default btn-plus" type="button">+</button>' +
                    '<button class="btn btn-default btn-minus" type="button">-</button>' +
                    '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            }
            var maxHeight = 0;
            $('.equalize').each(function(){
                if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            });
            $('.equalize').height(maxHeight);

            $('.btn-plus').click(function () {
                var inputField = $(this).parent().parent().find("input");
                var inputValue = parseInt(inputField.val()) || 0;
                inputField.val(++inputValue);
            });


            $('.btn-minus').click(function () {
                var inputField = $(this).parent().parent().find("input");
                var inputValue = parseInt(inputField.val()) || 0;
                inputField.val(inputValue > 0? --inputValue: 0);
            });
        },
        error: function (soapResponse) {
            $('#spinner').spin(false);
            console.log(soapResponse);
            // show error
        }
    });
}

function onCheckoutClick() {
    $('#checkoutBtn').click(function () {
        $('#checkout').modal('show');
        $('#shopping-card').html("");
        $('#shopping-card').append(
            '<tr>' +
            '<th>Name</th>' +
            '<th>Price</th>' +
            '<th>Weight</th>' +
            '<th>Quantity</th>' +
            '<th></th>' +
            '</tr>'
        );

        $('.product').each(function () {
            var qty = parseInt($(this).find("input").val()) || 0;
            if (qty > 0) {
                var id = $(this).data("id"),
                    name = $(this).data("name"),
                    price = $(this).data("price"),
                    weight = $(this).data("weight");

                $('#shopping-card').append(
                    '<tr '+
                    'data-id="' + id + '"' +
                    'data-name="' + name + '"' +
                    'data-price="' + price + '"' +
                    'data-weight="' + weight + '"' +
                    '>' +
                    '<td>' + name + '</td>' +
                    '<td>' + price + ' €</td>' +
                    '<td>' + weight + ' gr</td>' +
                    '<td><input type="text" class="form-control" style="width: 55px" value="' + qty + '" placeholder="Quantity"></td>' +
                    '<td><button type="button" class="btn btn-danger delete-item"><span class="glyphicon glyphicon-trash"></span></button></td>' +
                    '</tr>'
                );
            }
        });

        $('.delete-item').click(function() {
            $(this).parent().parent().remove();
        })

    });
}

function onBuyClick() {
    $('#buyBtn').click(function () {
        var product = [];
        $('#shopping-card').children().children().each(function () {
            var qty = parseInt($(this).find("input").val()) || 0;
            if (qty > 0) {
                product.push({
                    productId: $(this).data("id"),
                    numberOfItems: qty
                });
            }
        });
        //Todo: Add checks for empty bag & input fields
        var port = $('#port').val()
        var method = $('input[name=method]:checked').val();


        var data = {
            input: {
                customerId: $('#email').val(),
                shippingAddress: $('#address').val(),
                paymentDetails: {
                    bankName: $('#bankName').val(),
                    bankAddress: $('#bankAddress').val(),
                    accountNumber: $('#accountNumber').val(),
                    accountHolderName: $('#accountHolder').val()
                },
                shipmentDate: getCurrentDate(),
                products: {
                    product: product
                }
            }
        };

        if(method == "/ode/processes/ConductOrder-Async") {
            data.callbackPort = port;
        }

        toggleCheckoutScreen();
        $('#order-processing-content').spin(spinnerOpts);
        $('#order-processing-content').attr("style", "height: 100px");
        $.soap({
            url: 'http://uni.steilergroup.net:' + port + method,
            method: 'ConductOrderRequest',
            appendMethodToURL: false,
            namespaceURL: 'http://group-one',

            data: data,
            success: function(soapResponse) {
                $('#order-processing-content').spin(false);
                $('#doneBtn').removeAttr("disabled");
                $('#order-processing-content').removeAttr("style");
                var soapJsonResponse = soapResponse.toJSON();
                console.log(soapJsonResponse);

                var customerId = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:customerId"],
                    accountHolder = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:paymentDetails"].accountHolderName._,
                    accountNumber = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:paymentDetails"].accountNumber._,
                    bankAddress = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:paymentDetails"].bankAddress._,
                    bankName = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:paymentDetails"].bankName._,
                    shipmentAddress = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:shippingAddress"],
                    shipmentDate = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:shipmentDate"],
                    status = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:status"],
                    result = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:result"]._;

                console.log(result);
                if(status == "cancelled") {
                    $('#order-processing-content').append(
                        '<div class="alert alert-danger" role="alert">' + result + '</div>' +
                        '<h4>Order Summary</h4>' +
                        '<table>' +
                            '<tr>' +
                                '<td>Customer ID</td>' +
                                '<td>' + customerId + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td><b>Status</b></td>' +
                                '<td><b>' + status + '</b></td>' +
                            '</tr>' +
                        '</table>'
                        );
                } else {
                    var orderId = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:orderId"],
                        price = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:price"]._,
                        orderProcessingProductList = soapJsonResponse["#document"]["soapenv:Envelope"]["soapenv:Body"]["ConductOrderResponse"]["tns:order"]["tns:products"];

                    $('#order-processing-content').append(
                        '<div class="alert alert-success" role="alert">' + result + '</div>' +
                        '<h4>Order Summary</h4>' +
                        '<table>' +
                            '<tr>' +
                                '<td>Order ID</td>' +
                                '<td>' + orderId + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>Customer ID</td>' +
                                '<td>' + customerId + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>Shipping Address</td>' +
                                '<td>' + shipmentAddress + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>Shipping Date</td>' +
                                '<td>' + shipmentDate + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td><b>Total Value</b></td>' +
                                '<td><b>' + price + '</b></td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td><b>Status</b></td>' +
                                '<td><b>' + status + '</b></td>' +
                            '</tr>' +
                        '</table>' +
                        '<h4>Payment Summary</h4>' +
                        '<table>' +
                            '<tr>' +
                                '<td>Account Holder</td>' +
                                '<td>' + accountHolder + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>Account Number</td>' +
                                '<td>' + accountNumber + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>Bank Name</td>' +
                                '<td>' + bankName + '</td>' +
                            '</tr>' +
                            '<tr>' +
                                '<td>Bank Address</td>' +
                                '<td>' + bankAddress + '</td>' +
                            '</tr>' +
                        '</table>' +
                        '<h4>Product Summary</h4>' +
                        '<table id="productSummaryTable">' +
                            '<tr>' +
                                '<th>Product ID</td>' +
                                '<th>Quantity</th>' +
                            '</tr>' +
                        '</table>'
                    );
                    console.log(orderProcessingProductList);
                    for(var i in orderProcessingProductList) {
                        if(orderProcessingProductList[i].productId && orderProcessingProductList[i].numberOfItems) {
                            $('#productSummaryTable').append(
                                '<tr>' +
                                    '<td>' + orderProcessingProductList[i].productId + '</td>' +
                                    '<td>' + orderProcessingProductList[i].numberOfItems + '</td>' +
                                '</tr>'
                            )
                        }
                    }

                }

            },
            error: function(soapResponse) {
                $('#spinner').spin(false);
                console.log(soapResponse)
            }
        });
    });
}

function toggleCheckoutScreen() {
    $('#order-preparation-content').toggleClass("hidden");
    $('#order-processing-content').toggleClass("hidden");
    $('#buyBtn').toggleClass("hidden");
    $('#doneBtn').toggleClass('hidden');
    $('#cancelCheckoutButton').toggleClass("hidden");
}

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd='0'+dd
    }

    if(mm<10) {
        mm='0'+mm
    }

    return yyyy+'-'+mm+'-'+dd;
}

$(document).ready(function() {
    updateProducts();

    $('.refresh').click(function () {
        limit = parseInt($(this).text()) || limit;
        updateProducts()
    });

    $('#doneBtn').click(function () {
        $('#checkout').modal('hide');
        toggleCheckoutScreen();
        $('#order-processing-content').html("");
        $('#doneBtn').attr("disabled", "disabled");
    });

    onCheckoutClick();
    onBuyClick();
});
