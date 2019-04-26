function printProductsPage(data,id_div) {
    data.forEach(prod => {
        $(id_div).append(sprintf(template_prod,
                                      [ prod['product_code'],
                                        prod['product_name'],
                                        prod['price'],
                                        prod['product_code']]));
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