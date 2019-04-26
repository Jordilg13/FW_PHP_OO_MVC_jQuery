function num_products(sel) {
    if (sel.options[sel.selectedIndex].value == 6) {
        window.location.href="index.php?&num=6";
    } else if (sel.options[sel.selectedIndex].value == 8) {
        window.location.href="index.php?&num=8";
    } else {
        window.location.href="index.php";
    }
    
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
    pagination("home","#home_products","");


    $('#submit_button_searcher_home').on("click", function () {
        
        var elementscollection = $('#product_name, #brand, #available_until');
        var params = {};
        // params is setted with the 3 search parameters, if they are empty, a ! is setted instead
        for (let i = 0; i < elementscollection.length; i++) {
            params[elementscollection[i].id]=elementscollection[i].value+"!"
        }

        $.ajax({
            type: "POST",
            url: "utils/session/setSession.php",
            data: {sessionvar: "home_search_params", home_search_params: params},
            success: function(data){
                if (data == '"setted"') {
                    window.location.href="shop";
                }
                console.log(data);
            }
        });
    });
    
});