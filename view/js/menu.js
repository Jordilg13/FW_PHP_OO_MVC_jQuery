$(document).ready(function () {

    function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }
    
    var page_element = getQueryVariable('page');
    // console.log(page_element);
    $(".active").removeClass('active');
    $('#'+page_element).addClass('active');

    if(page_element=='index'||page_element==""||page_element==false){
        $('#home_button').addClass('active');
    
    }


});

