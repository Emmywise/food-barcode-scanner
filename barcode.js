var getProductDetails = function(barcode) {
	var url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`

	$.ajax(url)
	.done(function( data ) {

		var text = `status: ${data.status}<br>
                    status verbose: ${data.status_verbose}<br>
					code: ${data.code}<br>
					origins: ${data.product.origins}<br>
					countries: ${data.product.countries}<br>
					expiry date: ${data.product.expiration_date}`
                    
        
        $("#data").html(text);
    
		console.log('data: ', data);


	})
	.fail(function(errorMsg) {
		console.log('error: ', errorMsg);
	})
}

$("#search").click(function(){
	var barcode = $("#inputPdt").val();
	console.log(barcode);
	getProductDetails(barcode)
});
