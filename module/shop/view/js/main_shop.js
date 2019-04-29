$(document).ready(function () {
    var page_url = window.location.href.split("/");
    page_module=page_url[page_url.length -1];

    $('#details_product').hide();

    if (page_module === "shop") {
        $.ajax({
            type: "POST",
            url: "utils/session/getSession.php",
            data: {sessionvar: "home_search_params"},
            dataType: "json",
            success: function(data){
                if (data != "unsetted") {
                    console.log("if");
                    $("#brand").val(data['brand'].replace("!",""));
                    $("#product_name").val(data['product_name'].replace("!",""));
                    $("#available_until").val(data['available_until'].replace("!",""));

                    // $("#searched_products").html(''); // clear previous products
                    fillElements();
                    $.ajax({type: "POST",url: "utils/session/clearSession.php",data: {sessionvar: "home_search_params"}}); //clear search params
                } else {
                    console.log("else");
                    // print filtered products with pagination
                    pagination("shop","#searched_products","");
                }

            }
        });
    }


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




    // search
    // 3 fields
    $('#brand, #product_name, #available_until').on("keyup", function () {
        var thiss = this;
        autocomplete(thiss);
    });

    // hide suggestions panel when text input hasn't focus
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    $('#submit_button_searcher').on("click", function () {
        fillElements();
    });


});