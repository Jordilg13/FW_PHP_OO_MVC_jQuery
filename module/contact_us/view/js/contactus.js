$(document).ready(function () {
    $('#send_button').on("click",function(){
        console.log($('#contact_form').serializeJSON());
        // $.ajax({
        //     type: 'POST',
        //     url: '',
        //     data: $('#contact_form').serializeJSON(),
        //     dataType: 'json',
        //     success: function(data){
        //         console.log(data);
        //     }
        // });
    });
});