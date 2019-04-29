$(document).ready(function () {
    var url = new URL(window.location.href);
    var page = url.searchParams.get("page");
    
    if (page == "likes_controller") {
        // -----------------
        // -- jqdatatable --
        // -----------------
        var url = "module/likes/controller/likes_controller.php?op=datatable&u_id="+getUserId().responseText;          
        // prepare the data
        var source =
        {
            dataType: "json",
            // dataType: "array",
            dataFields: [
                { name: 'user_l', type: 'string' },
                { name: 'product_code', type: 'string' },
                // { name: 'Action', type: 'string' }
            ],
            id: 'id',
            url: url
        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        console.log(dataAdapter);
        $("#dataTable").jqxDataTable(
        {   
            width: $("#dataTable").width(),
            pagerButtonsCount: 10,
            source: dataAdapter,
            sortable: true,
            pageable: true,
            altRows: true,
            filterable: true,
            columnsResize: true,
            theme: "metro",
            pagerMode: 'advanced',
            columns: [
                { text: 'User', dataField: 'user_l'},
                { text: 'Product', dataField: 'product_code'},
                // { text: 'Action', dataField: 'Action'},
            ]
        });  
    }
    

    
    
});


