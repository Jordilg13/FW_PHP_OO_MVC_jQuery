function num_products(sel) {
    if (sel.options[sel.selectedIndex].value == 6) {
        window.location.href="index.php?&num=6";
    } else if (sel.options[sel.selectedIndex].value == 8) {
        window.location.href="index.php?&num=8";
    } else {
        window.location.href="index.php";
    }
    
}
function printProductsPage(data) {
    data.forEach(prod => {
        $('#home_products').append(sprintf(template_prod,
                                      [ prod['product_code'],
                                        prod['product_name'],
                                        prod['price'],
                                        prod['product_code']]));
    });
}
function getProductsPage(index) {
    $.ajax({
        type: "GET",
        url: "api/home/limit-"+index+",4",
        dataType: "json",
        success: function(data){
            console.log(data);
            printProductsPage(data);
        }
    });
}


$(document).ready(function () {
    template_prod = `
	<div class='col-md-3 col-6 s-1'>
		<a>
			<div class='view view-fifth'>
				<i class='fas fa-home'></i>
				<div class='mask'>
				<h4 id='individual_card' name='%s'>%s    %s€<p id='%s' class='like'>❤</p></h4>
				</div>
			</div>
		</a>
	</div>`;

    // print home products
    $.ajax({
        type: 'GET',
        url: 'api/home/count-1',
        dataType: 'json',
        success: function(data){
            console.log(data);
            getProductsPage(0); // first page

            $("#pagination").bootpag({
                total: Math.ceil(data[0].rowcount/4),
                page: 1,
                maxVisible: 5,
                leaps: true,
                firstLastUse: true,
                first: "<<",
                last: ">>"
            }).on("page", function (event, page) {
                var start = (page-1)*4;
                $('#home_products').html('');
                getProductsPage(start);
            });
        }
    })
    
});