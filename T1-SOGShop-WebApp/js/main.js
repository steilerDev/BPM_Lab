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
            console.log(soapResponse.toJSON());
            $('#spinner').spin(false);
            $('#items').html("");

            var productList = soapResponse.toJSON()["#document"]["soap:Envelope"]["soap:Body"]["FlowSOG:listProductsResponse"]["FlowSOG:productList"]["FlowSOG:product"]
            for(var i in productList) {
                $('#items').append(
                    '<div class="col-sm-6 col-md-4">' +
                    '<div class="thumbnail equalize">' +
                    '<div class="caption">' +
                    '<h4>' + productList[i]["FlowSOG:name"] + '</h4>' +
                    '<p>Price: ' + productList[i]["FlowSOG:price"] + '€<p>' +
                    '<p> Weight:' + productList[i]["FlowSOG:weight"] + 'gr</p>' +
                    '<div class="input-group">' +
                    '<input type="text" class="form-control" placeholder="Quantity">' +
                    '<span class="input-group-btn">' +
                    '<button class="btn btn-default" type="button">+</button>' +
                    '<button class="btn btn-default" type="button">-</button>' +
                    '</span>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            }
            var maxHeight = 0;
            $(".equalize").each(function(){
                if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            });
            $(".equalize").height(maxHeight);

            // do stuff with soapResponse
            // if you want to have the response as JSON use soapResponse.toJSON();
            // or soapResponse.toString() to get XML string
            // or soapResponse.toXML() to get XML DOM
        },
        error: function (soapResponse) {
            console.log(soapResponse.toJSON());
            // show error
        }
    });
}

$(document).ready(function() {
    updateProducts();

    $('.refresh').click(function () {
        limit = parseInt($(this).text()) || limit;
        updateProducts()
    });
});
