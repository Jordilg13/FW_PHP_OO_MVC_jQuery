function fillElements(id_arr) {
    console.log(id_arr);

    $.ajax({
        data: id_arr,
        url: "module/shop/controller/shop.php?op=autocomplete",
        type: 'POST',
        success: function (data) {
            console.log("data");
            data = JSON.parse(data);
            $template_prod =
                "<div class='col-md-3 col-6 s-1 product-card' id='product_card_id'>" +
                "<a href='#!'>" +
                "<div class='view view-fifth'>" +
                "<i class='fas fa-home'></i>" +
                "<div class='mask'>" +
                "<h4 id='individual_card' name='%s'>%s    %s€ <p id='%s' class='like'>❤</p></h4>" +
                "</div>" +
                "</div>" +
                "</a>" +
                "</div>";
            //clear previous elements
            document.getElementById("searched_products").innerHTML = "";


            //append new elements
            for (let i = 0; i < data.length; i++) {
                $("#searched_products").append(sprintf($template_prod, [data[i][0],data[i][1], data[i][4],data[i][0]]));
            }
            let prod_cards = document.querySelectorAll('#product_card_id');

            $(prod_cards).on("click", function () {
                window.location.href = "index.php?page=shop&op=view_product&id=" + $(this).find("h4").attr("name");
            });
            //after childs are created, add on click event to each one
            // $("#product_card_id").on("click", function () {
            //     console.log("on click prod"); 
            // });

            // matches = document.querySelectorAll('#product_card_id');
            // $("#product_card_id").on("click", function () {
            //     console.log(this.value); 
            // });
        }
    })
}
function generateDataToSend(thiss) {

    if (typeof thiss === 'string')
        id_val = "*";
    else
        id_val = thiss.id;
    var id_arr = {
        toAutoComplete: id_val,
        fields: {
            brand: {
                "typed": document.getElementById("brand").value
            },
            product_name: {
                "typed": document.getElementById("product_name").value
            },
            available_until: {
                "typed": document.getElementById("available_until").value
            }
        }
    };
    return id_arr;
}

function autocomplete(thiss) {
    var dropdown = "myDropdown1-" + thiss.id;
    var this_obj = $(thiss);
    id_arr = generateDataToSend(thiss);
    // console.log(id_arr);

    // if text input is empty, don't show anything
    // if (!this_obj.val().length == 0) {

    // text typed and the field to serach

    $.ajax({
        type: "POST",
        url: "module/shop/controller/shop.php?op=autocomplete",
        data: id_arr,
        success: function (data) {
            console.log(data);
            // show suggestions panel
            var suggestions_panel = document.getElementById(dropdown);
            if (!suggestions_panel.classList.contains("show")) {
                suggestions_panel.classList.toggle("show");
            }
            // console.log(data);
            data = JSON.parse(data);

            // remove previous suggestions
            var myNode = document.getElementById(dropdown);
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }

            // add the new suggestions
            for (let i = 0; i < data.length; i++) {
                var node = document.createElement("a");
                node.appendChild(document.createTextNode(data[i][0]));
                document.getElementById(dropdown).appendChild(node);

                // new event to each 'a', on click set the value of the suggestion to the input text
                node.addEventListener("click", function () {
                    document.getElementById(this_obj[0].id).value = this.textContent;
                }, false)
            }

        }
    })
}

function fillSingleProduct(id) {
    if (id.length == 5) {
     
        $.ajax({
            data: {"id":id},
            url: 'module/shop/controller/shop.php?op=singlelement',
            type: 'POST',
            success: function (data) {
                data = JSON.parse(data);
                document.getElementById("product_type").innerHTML = data[0][6];
                document.getElementById("product_name").innerHTML = data[0][1];
                document.getElementById("price").innerHTML = data[0][4]+"€";
    
                //list items
                document.getElementById("brand").innerHTML = "<b>Brand: </b>"+data[0][2];
                document.getElementById("m_email").innerHTML = "<b>Manuf. Email: </b>"+data[0][3];
                document.getElementById("state").innerHTML = "<b>State: </b>"+data[0][5];
                document.getElementById("processor_type").innerHTML = "<b>Processor Type: </b>"+data[0][7];
                document.getElementById("available_until").innerHTML = "<b>Available Until: </b>"+data[0][8];
                document.getElementsByClassName('btn btn-default btn-lg like')[0].id = data[0][0]
                console.log(document.getElementsByClassName('btn btn-default btn-lg like')[0].id);
            }
        })
    } else {
        $.ajax({
            url: "module/shop/controller/shop.php?op=api_product",
            type: 'GET',
            dataType: 'JSON',
            success: function(data){
                document.getElementById('hoverable_list_list_features').style.display = "none";
                console.log(data);
                document.getElementById("product_type").innerHTML = data['category'];
                document.getElementById("product_name").innerHTML = data['id'];
                document.getElementById("price").innerHTML = data['price'];
                document.getElementById("description").innerHTML = data['description'];
                document.getElementById("product_picture").src = data['img'];
                // break lines
                document.getElementById("fooBar").appendChild(document.createElement("br"));
                document.getElementById("fooBar").appendChild(document.createElement("br"));
                document.getElementById("fooBar").appendChild(document.createElement("br"));
                
            }
        })
        
    }
    
    
}

// ----------------------
// ----- search-bar -----
// ----------------------


$(document).ready(function () {
    //create a url to be able to check the page
    var url = new URL(window.location.href);
    var op = url.searchParams.get("op");
    // var page = url.searchParams.get("page");

    
    // redirect to details on home products
    $('.mask').on("click",function(e){
        window.location.href = "index.php?page=shop&op=view_product&id="+this.children[0].attributes[1].nodeValue;
        e.stopPropagation();
    });

    if (op == "list") {
        //first time fill with no-filters elements
        id_arr = generateDataToSend("*");
        fillElements(id_arr);
    } else if (op == "view_product") {
        var id = url.searchParams.get("id");
        fillSingleProduct(id);
    }

    //search-b ar
    $('#brand, #product_name, #available_until').on("keyup", function () {
        var thiss = this;
        autocomplete(thiss);
    });
    //on click search button
    $('#submit_button_searcher').on("click", function () {
        id_arr = generateDataToSend("*");
        fillElements(id_arr);
    });

    $('#submit_button_searcher_home').on("click", function () {
        console.log("search home button pressed");

        // fillElements(id_arr)

        var thiss = $(this);
        var typed_arr = generateDataToSend(thiss);

        $.ajax({
            data: typed_arr,
            url: "module/shop/controller/shop.php?op=redirect",
            type: 'POST',
            success: function (data) {
                console.log(data);
                window.location.href = "index.php?page=shop&op=list";
            }
        })
    });
    // searcher datepicker

    // only allows the days that the queery returns
    // var availableDates = [];

    // function available(date) {
    //     dmy = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    //     if ($.inArray(dmy, availableDates) != -1) {
    //         return [true, "","Available"];
    //     } else {
    //         return [false,"","unAvailable"];
    //     }
    // }

    // $(document).ready(function () {
    //     $('#available_until').datepicker({
    //         dateFormat: 'dd/mm/yy', 
    //         changeMonth: true, 
    //         changeYear: true, 
    //         yearRange: '1900:2100',
    //         minDate: -1000000,
    //         beforeShowDay: available,
    //         showOptions: { direction: "up" } // drop datepicker to botside
    //     });
    // });


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
