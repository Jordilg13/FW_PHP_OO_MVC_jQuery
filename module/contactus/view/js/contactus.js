$(document).ready(function () {

    $('#send_button').on("click",function(){
        console.log("click");
        $.ajax({
            type: 'POST',
            url: 'api/contactus',
            data: $('#contact_form').serializeJSON(),
            dataType: 'json',
            success: function(data){
                console.log(data);
                if (data['message'] == "Queued. Thank you.") {
                    toastr["success"]("We sent the email, please check your inbox.", "Email sent.");
                    window.setTimeout(function(){
                        document.location.href = "/web_framework_php/";
                    },2000)
                } else {
                    toastr["error"]("We aren't able to send you an email, please check if the contact information is correct.", "Something went wrong");
                }
            }
        });
    });
});