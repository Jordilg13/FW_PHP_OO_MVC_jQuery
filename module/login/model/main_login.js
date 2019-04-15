$(function () {

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});
// regexp validators
function validastring(str) {
  if (str.length > 0) {
    var regexp = /^[a-zA-Z0-9]*$/;
    return regexp.test(str);
  }
  return false;
}
function validaemail(email) {
  if (email.length > 0) {
    var regexp = /^[A-Z0-9._%+-]+@(?:[A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    return regexp.test(email);
  }
  return false;
}
function validaPass(pass) {
  if (pass.length > 0) {
    // from 4 to 16 characters, at least 1 number
    var regexp = /^(?=.*\d).{4,16}$/;
    return regexp.test(pass);
  }
  return false;
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
function logout() {
  $.ajax({
    type: 'GET',
    url: 'module/login/controller/login_controller.php?op=logout',
    success: function (data) {
      // console.log('asdf');

      console.log(data);
      if (data == '"done"') {
        window.location.href = "index.php";
      }
    }
  });
}
function setLoggedUser() {
  $.ajax({
    type: 'GET',
    url: 'module/login/controller/login_controller.php?op=logged_user',
    success: function (data) {
      // console.log(data);
      if (data != "no logged") {


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
          window.location.href = "index.php?page=cart_controller&op=view";
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
       
        getUserInfo(data)
        .then(function (info) {
          console.log(info);

          

          var txt_node = document.createTextNode(info['username']);
          usnam.appendChild(txt_node);
          usnam.addEventListener("click",function(){
            window.location.href = "index.php?page=profile";
          });
          document.getElementsByClassName("logged")[0].appendChild(usnam);
          
          // setting the avatar of the user
          var avatar = document.createElement("img");
          avatar.setAttribute("src", "http://localhost/web_framework_php/media/"+info['profile_img']);
          avatar.setAttribute("class", "img_login");
          document.getElementsByClassName("logged")[0].appendChild(avatar);
          
          return info;
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
  log_btn.setAttribute("href", "index.php?page=login");
  log_btn.setAttribute("id", "login");
  log_btn.setAttribute("class", "nav-link text-uppercase");
  log_btn.setAttribute("data-tr", "Login");
  log_btn.append(document.createTextNode("Login"));
  document.getElementsByClassName("logged")[0].appendChild(log_btn);
}
function getUserInfo(id) {
  id = { "id": id };


  return new Promise(function (resolve, reject) {
    $.ajax({
      type: 'POST',
      url: 'module/login/controller/login_controller.php?op=user_info',
      data: id,
      dataType: 'json',
      success: function (data) {
        // console.log(data);

        resolve(data);
      },
      error: function(err){
        reject(err);
      }
    });
  });
}
function getUserId() {
  // use: 
  return $.ajax({
    type: 'GET',
    url: 'module/login/controller/login_controller.php?op=logged_user',
    dataType: 'json',
    async: false,
    success: function (data) {
    }
  })
}
function login() {
  $.ajax({
    type: 'POST',
    url: 'module/login/controller/login_controller.php?op=login',
    data: $('#login-form').serializeArray(),
    success: function (data) {
      console.log(data);

      if (data == '"invalid password"') {
        // alert("invalid pass");
        document.getElementById('password').classList.add('is-not-valid');
        document.getElementById('log_pass').innerText = "Invalid password.";
        document.getElementById('username').classList.remove('is-not-valid');
        document.getElementById('log_username').innerText = "";
      } else if (data == '"user doesn\'t exists"') {
        // alert("user doesn't exists");
        document.getElementById('username').classList.add('is-not-valid');
        document.getElementById('log_username').innerText = "This user is not registred.";
        document.getElementById('password').classList.remove('is-not-valid');
        document.getElementById('log_pass').innerText = "";
      } else {
        // alert("logged");
        window.location.href = "index.php";
      }
    }
  })
}
function adaptToUser(userId) {

  if (userId['responseText'] == "no logged") {
    userId['responseText'] = -1;    
  }
    
  getUserInfo(userId['responseText'])
  .then(function (userInfo) {
    if (userInfo['type'] != "Admin") {
     
      var admin_elements = document.querySelectorAll("td .btn-success, td .btn-danger, p .btn-success, p .btn-danger");
      for (let i = 0; i < admin_elements.length; i++) {
        if (!admin_elements[i].classList.contains("like")) {
          admin_elements[i].style.display = "none";
        }
        
      }
    }

    if (userId['responseText'] == -1) {
      document.getElementById("likes_controller").style.display = "none";
      
    }
  });

}

function regenerate_session_id() {
  // session will be regenerated each 900s(15min)
  window.setTimeout(function(){
    $.ajax({
      type: 'GET',
      url: 'module/login/controller/login_controller.php?&op=regenerate_id',
      dataType: 'json',
      success: function(data){
        console.log(data);
        regenerate_session_id();
      }
    })
  }, 900000);
}


// activity
var timeoutID;
function startTimer() {
  if (getUserId().responseText != "no logged") {
    // it waits 10s to start sending petitions to the backend to avoid traffic
    timeoutID = window.setTimeout(goInactive, 10000);
  }
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
    goActive();
}
 
function goInactive() {
  setInterval(function(){ 
			$.ajax({
				type: 'GET',
				url: 'module/login/controller/login_controller.php?&op=set_time_activity',	
				dataType: 'json',
				success: function(data){
					console.log(data);
				}
			});

			$.ajax({
				type : 'GET',
				url  : 'module/login/controller/login_controller.php?&op=activity',
				success :  function(response){
          console.log(response);			
					if(response=="inactivo"){
						alert("We logged you out for inactivity, please log in again to still using Client features.");
						setTimeout(logout(),1000);
          }
				}
			});
		}, 10000);  
}

function goActive() {
  
  
  $.ajax({
    type: 'GET',
    url: 'module/login/controller/login_controller.php?&op=reset_activity_time',
    dataType: 'json',
    success: function(data){
    }
  });
  startTimer();
}

function setup() {
  this.addEventListener("mousemove", resetTimer, false);
  this.addEventListener("mousedown", resetTimer, false);
  this.addEventListener("keypress", resetTimer, false);
  this.addEventListener("DOMMouseScroll", resetTimer, false);
  this.addEventListener("mousewheel", resetTimer, false);
  this.addEventListener("touchmove", resetTimer, false);
  this.addEventListener("MSPointerMove", resetTimer, false);

  startTimer();
}




$(document).ready(function () {
  var login_url = new URL(window.location.href);
  var page = login_url.searchParams.get("page");

  setLoggedUser();
  adaptToUser(getUserId());

  regenerate_session_id();

  // activity
  // setup();
 

  $('.mask p').on("click",function(e){
    // dont active the click event on '.mask', just in '.mask p'
    e.stopPropagation();
    console.log("stop propagation");
    
    
  });

  $('#password').on("keydown",function (e) {
    if (e.which == 13) {
      login();
    }
  });
  // register form
  $('#register-submit').on("click", function () {
    if (validateInfo()) {
      user_info = $('#register-form').serializeArray();
      // console.log(user_info);

      $.ajax({
        type: 'POST',
        url: 'module/login/controller/login_controller.php?op=register',
        data: user_info,
        success: function (data) {
          // console.log(data);

          if (data == '"created"') {
            // alert("User created.");
            window.location.href = "index.php"
          } else {
            document.getElementById('username_reg').classList.add('is-not-valid');
            document.getElementById('reg_username').innerText = "This username is already used.";
          }
        }

      })

    }

  })

  // login form
  $('#login-submit').on("click", function () {
   
    login();
    // TODO: quan pulse like,sense estar logejat, demane login i si es logeja correctament añadir el like que havia clicat

  })

  // $('#table_crud').on("change", funcion() {

  // })




});
