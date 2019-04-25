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
    
});