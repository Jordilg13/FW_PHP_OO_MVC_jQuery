function autocomplete(thiss) {
    var dropdown = "myDropdown1-" + thiss.id;
    var this_obj = $(thiss);

    $.ajax({
        type: "GET",
        url: generateURL(),
        dataType: "json",
        success: function(data){
            console.log(data);
            // shows the panel
            var suggestions_panel = document.getElementById(dropdown);
            if (!suggestions_panel.classList.contains("show")) {
                suggestions_panel.classList.toggle("show");
            }

            // remove previous suggestions
            var myNode = document.getElementById(dropdown);
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }

            // add the new suggestions
            for (let i = 0; i < data.length; i++) {
                var node = document.createElement("a");
                node.appendChild(document.createTextNode(data[i][thiss.id]));
                document.getElementById(dropdown).appendChild(node);

                // new event to each 'a', on click set the value of the suggestion to the input text
                node.addEventListener("click", function () {
                    document.getElementById(this_obj[0].id).value = this.textContent;
                }, false)
            }
        }
    });
}

function generateURL(){
    var url = "api/shop/limit-7/";
    // api/shop/limit-7/product_name-!/brand-!/available_until-!
    var elementscollection = $('#product_name, #brand, #available_until');
    for (let i = 0; i < elementscollection.length; i++) {
        url += elementscollection[i].id+"-"+elementscollection[i].value+"!/";
    }

    return url;
}

function fillElements() {
    var url = generateURL();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data){
            // console.log(data);
            // console.log(url.replace("api/shop/","").substring(0,url.replace("api/shop/","").length -1));
            var url = generateURL().replace("api/shop/","").replace("limit-7/","");
            url = url.substring(0,url.length -1);
            
            pagination("shop","#searched_products",url);
        }
    });
}