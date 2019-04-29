$(document).ready(function () {
    setLoggedUser();

    // active login at start
    $('#login-form-link').addClass('active');

    // LOGIN
    $('#login-submit').on("click", function () {
        login(); // TODO: quan pulse like,sense estar logejat, demane login i si es logeja correctament añadir el like que havia clicat
    });
    $('#password').on("keydown",function (e) {
        if (e.which == 13) {
          login();
        }
    });


    // REGISTER
    $('#register-submit').on("click", function () {
        register(); 
    });

});