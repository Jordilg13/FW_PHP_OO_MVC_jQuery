function printProductsPage(data,id_div) {
    data.forEach(prod => {
        $(id_div).append(sprintf(template_prod,
                                      [ prod['product_code'],
                                        prod['product_name'],
                                        prod['price'],
                                        prod['product_code']]));

        // adds thee event that redirect to profile
        $(id_div).children().last().children().last().children().last().children().last().children().last().on("click", function(){
           
            $.ajax({
                type: "GET",
                url: "api/shop/product_code-"+$(this).attr("name"),
                dataType: "json",
                success: function(data){  
                    $('#imgProductModal').attr("src",data[0]['img']);
                    $('#imgProductModal').css("height","100px");
                    // $('#imgProductModal').css("wi","100px");    
                    for (const key in data[0]) {
                        console.log(data[0][key]);
                        $('#'+key+'ProductModal').html(data[0][key]);
                    }
                }
            });
            $("#details_product").show();
            $("#product_modal").dialog({
                width: 850,
                height: 500,
                resizable: "false",
                modal: "true",
                buttons: {
                    Ok: function () {
                        $(this).dialog("close");
                    }
                },
                show: {
                    effect: "blind",
                    duration: 1000
                },
                hide: {
                    effect: "explode",
                    duration: 1000
                }
            });
        });
    });
            
}
function getProductsPage(index,id_div,mod,url) {
    
    $.ajax({
        type: "GET",
        url: "api/"+mod+"/limit-"+index+",4/"+url.replace("api/"+mod+"/",""),
        dataType: "json",
        success: function(data){
            printProductsPage(data,id_div);
        }
    });
}
function pagination(mod,id_div,url) {
    $(id_div).html(''); // clear previous products

    if (url.length === 0) {
        ajax_url = "api/"+mod+"/count-1";
    } else {
        ajax_url = "api/"+mod+"/count-1/"+url;
    }
    
    $.ajax({
        type: 'GET',
        url: ajax_url,
        dataType: 'json',
        success: function(data){
            getProductsPage(0,id_div, mod,url); // first page
            $("#pagination").off(); // disable existent event listeners, to set the news

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
                $(id_div).html(''); // clear previous products
                getProductsPage(start,id_div,mod,url);
            });
        }
    });
}