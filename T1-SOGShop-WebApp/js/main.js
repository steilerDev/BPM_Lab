$(document).ready(function() {



    $('#refresh').on('click', function () {
        $('#spinner').spin(spinnerOpts);
        $.soap({
            url: 'http://uni.steilergroup.net:3000/InventoryService/InventoryPort',
            method: 'listProducts',
            appendMethodToURL: false,
            namespaceURL: 'http://iaas.uni-stuttgart.de/labs/FlowSOG',

            data: {
                limit: 20
            },

            success: function (soapResponse) {
                console.log(soapResponse.toJSON());
                $('#spinner').spin(false);
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
    });
});
