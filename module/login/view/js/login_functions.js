function setLoggedUser() {
    $.ajax({
      type: 'POST',
      url: 'utils/session/getSession.php',
      data:{sessionvar: "logged_user"},
      dataType: "json",
      success: function (data) {

        if (data !== "unsetted") {

          $.ajax({
            type: "GET",
            url: "api/login/ID-"+data,
            dataType: "json",
            success: function(data){
              console.log(data);

              var log_btn = document.createElement("a");
              log_btn.setAttribute("id", "logout");
              log_btn.setAttribute("class", "nav-link text-uppercase");
              log_btn.setAttribute("data-tr", "Logout");
              log_btn.append(document.createTextNode("Logout"));
              log_btn.addEventListener("click", function () {
      
                logout();
              });
      
              document.getElementsByClassName("logged")[0].appendChild(log_btn);
      
              var cart_btn = document.createElement("a");
              cart_btn.setAttribute("id", "cart_btn");
              cart_btn.setAttribute("class", "nav-link text-uppercase");
              cart_btn.addEventListener("click", function () {
                window.location.href = "cart";
              });
              var lbl_num_cart = document.createElement("label");
              lbl_num_cart.setAttribute("class", "lbl_num_cart");
              lbl_num_cart.textContent = "0";
              cart_btn.append(lbl_num_cart);
      
              document.getElementsByClassName("logged")[0].appendChild(cart_btn);
      
      
      
              // creting the username label
              var usnam = document.createElement("p");
              usnam.setAttribute("class", "nav-link text-uppercase");
              // console.log(getUserInfo(data));
      
              //  console.log(data);
            
              // getUserInfo(data)
              // .then(function (info) {
              //   console.log(info);
      
                
      
                var txt_node = document.createTextNode(data[0]['username']);
                usnam.appendChild(txt_node);
                usnam.addEventListener("click",function(){
                  window.location.href = "profile";
                });
                document.getElementsByClassName("logged")[0].appendChild(usnam);
                
                // setting the avatar of the user
                var avatar = document.createElement("img");
                avatar.setAttribute("src", "http://localhost/web_framework_php/media/"+data[0]['img']);
                avatar.setAttribute("class", "img_login");
                document.getElementsByClassName("logged")[0].appendChild(avatar);
                
            }
          });
  
  
          
  
        } else {
          set_login_button();
        }
  
      }
    })
}

function set_login_button() {
  // console.log('sett');

  var myNode = document.getElementsByClassName("logged")[0];

  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    // console.log('setloginbtn');
  }

  var log_btn = document.createElement("a");
  log_btn.setAttribute("href", "login");
  log_btn.setAttribute("id", "login");
  log_btn.setAttribute("class", "nav-link text-uppercase");
  log_btn.setAttribute("data-tr", "Login");
  log_btn.append(document.createTextNode("Login"));
  document.getElementsByClassName("logged")[0].appendChild(log_btn);
}

function login(){
var data_login = $('#login-form').serializeArray();

$.ajax({
    type: "POST",
    url: "api/login/username-"+data_login[0]['value'],
    data: {login:{op:"login",data:data_login[1]['value']}},
    dataType: "json",
    success: function(data){
      if (data !== "logged") {
        $('#username, #password').addClass("is-not-valid");
      } else {
        // setLoggedUser();
        window.location.href="."; //redirect to locahost/web_framework_php/  (homepage)
      }
      console.log(data);

    }
  });
}

function logout(){
  $.ajax({
    type: "DELETE",
    url: "api/login",
    dataType: "json",
    success: function(data){
      if (data) {
        window.location.href="";
      } else {
        toastr["error"]("The logout hasn't been unsuccesful.", "Something went wrong");
      }
    }
  });
}

function validateInfo() {
  var all_right = true;

  if (!validastring(document.getElementById('username_reg').value)) {
    document.getElementById('username_reg').classList.add('is-not-valid');
    document.getElementById('reg_username').innerText = "Invalid username.";
    all_right = false;

  } else {
    document.getElementById('reg_username').innerText = "";
    document.getElementById('username_reg').classList.remove('is-not-valid');
  }

  if (!validaemail(document.getElementById('email_reg').value)) {
    document.getElementById('email_reg').classList.add('is-not-valid');
    document.getElementById('reg_email').innerText = "Invalid email.";
    all_right = false;
  } else {
    document.getElementById('reg_email').innerText = "";
    document.getElementById('email_reg').classList.remove('is-not-valid');
  }

  if (document.getElementById('password_reg').value == document.getElementById('confirm-password_reg').value) {
    if (!validaPass(document.getElementById('password_reg').value)) {
      document.getElementById('password_reg').classList.add('is-not-valid');
      document.getElementById('reg_pass1').innerText = "Password must contain at least 1 number and from 4 to 16 characters.";
      all_right = false;
    } else {
      document.getElementById('reg_pass1').innerText = "";
      document.getElementById('password_reg').classList.remove('is-not-valid');
    }
  } else {
    document.getElementById('password_reg').classList.add('is-not-valid');
    document.getElementById('confirm-password_reg').classList.add('is-not-valid');
    document.getElementById('reg_pass1').innerText = "Passwords doesn't match.";
    all_right = false;
  }
  return all_right;
}

function register() {
  if (validateInfo()) {
    user_info = $('#register-form').serializeJSON();
    console.log(user_info);

    $.ajax({
      type: "POST",
      url: "api/login",
      data: {login:{op:"register",data:user_info}},
      success: function(data){
        console.log(data);
      }
    });

  }
}

function getUserId(){
  return JSON.parse($.ajax({
      type: 'POST',
      url: 'utils/session/getSession.php',
      data:{sessionvar: "logged_user"},
      dataType: "json",
      async: false,
      success: function(iduser){}
  }).responseText);
}