// ---------
// -- map --
// ---------
function initMap() {
    var uluru = {lat: 38.8102874, lng: -0.6043017};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: uluru
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Ontinyent</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Ontinyent</b>, és una ciutat del País Valencià. Capital de la comarca de la Vall d\'Albaida, consta d\'uns 38.000 habitants.</p>'+
        '<p>Attribution: Ontinyent, <a href="https://ca.wikipedia.org/wiki/Ontinyent">'+
        'Ontinyent</a> </p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: 'Ontinyent'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

// end map




$(document).ready(function(){

	/* ----  Image Gallery Carousel   ---- */
	
	var carousel = $('#carousel ul');
	var carouselSlideWidth = 335;
	var carouselWidth = 0;	
	var isAnimating = false;
	
	// building the width of the casousel
	$('#carousel li').each(function(){
		carouselWidth += carouselSlideWidth;
	});
	$(carousel).css('width', carouselWidth);
	
	// Load Next Image
	$('div.carouselNext').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft + carouselSlideWidth;
		if(newLeft == carouselWidth || isAnimating === true){return;}
		$('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
	
	// Load Previous Image
	$('div.carouselPrev').on('click', function(){
		var currentLeft = Math.abs(parseInt($(carousel).css("left")));
		var newLeft = currentLeft - carouselSlideWidth;
		if(newLeft < 0  || isAnimating === true){return;}
		$('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
});

function sprintf(template, values) {
	return template.replace(/%s/g, function () {
			return values.shift();
	});
}
function formatString(str) {
	str = str.split(" ");
	var final_str = "";
	for (let i = 1; i < str.length; i++) {
		final_str += str[i]+" ";
		if (i%3 == 0) {
			final_str += "\n";
		}
	}
	return final_str;
}


// 
// related products(API)
// 
var product_template_api = 
'<div class="theme-owlslider-container">'+
'<img class="img-responsive" src="%s" alt="">'+
'<h6 class="title"><a href="#" id="%s" cat="%s">%s</a></h6>'+
'<div class="price">%s€</div>'+
'</div>';
var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("page");

// Parse the response and build an HTML table to display search results
function _cb_findItemsByKeywords(root) {
		var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
		// console.log(items);
		
    var html = [];
    // html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
    for (var i = 0; i < items.length; ++i) {
			var item     = items[i];
      var title    = item.title;
      var pic      = item.galleryURL;
      var viewitem = item.viewItemURL;
      var price = item.sellingStatus[0].currentPrice[0]['__value__'];
      var category = item['primaryCategory'][0]['categoryName'][0];
      if (null != title && null != viewitem) { 
        html.push(sprintf(product_template_api, [pic, item['itemId'][0], category, title,price]));
      }
    }
    // html.push('</tbody></table>');
    if (c!="cart_controller") {
      // document.getElementById("api_products").innerHTML = html.join("");
      $('#api_products').html('');
    }
    

    var elements_div_api = document.getElementsByClassName('theme-owlslider-container');
    for (let i = 0; i < elements_div_api.length; i++) {
      elements_div_api[i].addEventListener("click", function () {
        // window.location.href="index.php?page=shop&op=view_product&id="+this['children'][1]['children'][0].id
        console.log(this);
       
        var id_data_prod = {
          "id": this['childNodes'][1]['firstChild'].id,
          "description": this['childNodes'][1]['firstChild']['innerText'],
          "price": this['childNodes'][2]['innerText'],
          "category": this['childNodes'][1]['firstChild']['attributes'][2]['textContent'],
          "img": this['firstChild']['currentSrc']
        };
        console.log(id_data_prod);
        
        $.ajax({
          data: id_data_prod,
          url: 'module/shop/controller/shop.php?op=redirect',
          type: 'POST',
          success: function(d){
            window.location.href = "index.php?page=shop&op=view_product&id="+id_data_prod['id'];
          }
        })
        }, false);
      
      
    }
    // console.log(document.getElementsByClassName('theme-owlslider-container')[1]);
}  // End _cb_findItemsByKeywords() function

// preloader
(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".pre-loader").length > 0)
        {
            $(".pre-loader").fadeOut("slow");
        }
    });
})(jQuery)