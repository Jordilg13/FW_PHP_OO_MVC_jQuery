$(document).ready(function () {
    var prof_url = new URL(window.location.href);
    var page_pro = prof_url.searchParams.get("page");

    // active the profile tab
    // document.getElementById('home').classList.add("active");
    // document.getElementById('home').classList.add("show");
    $($("#home")[0]).addClass("active");
    $($("#home")[0]).addClass("show");

    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    // load coutries
    $.ajax({
        type: 'GET',
        url: 'resources/countries.json',
        dataType: 'json',
        success: function(data){
            data.forEach(country => {
                $('#countries')[0].append(new Option(country['name'],country['filename']));
                $($('#countries')[0]).children().last().attr("code",country['code']);
            });
        }
    });

    $($('#countries')[0]).on("change",function(){
        var selected = $("option:selected", this)[0];
        console.log(selected.attributes[0].value);
        if (selected.attributes[0].value != "" && selected.attributes[0].value.length != 2) {
            // $($('#provinces')[0]).
            $.ajax({
                type: 'GET',
                url: 'resources/countries/'+selected.attributes[0].value+".json",
                dataType: 'json',
                success: function(data){
                    $($('#provinces')[0]).prop("disabled", false);
                    $($('#provinces')[0]).empty();
                    data.forEach(province => {
                        $('#provinces')[0].append(new Option(province['name'],province['code']));
                    });
                }
            })
        } else {
            $($('#provinces')[0]).prop("disabled", true);
            $($('#provinces')[0]).empty();
        }
    });


    // var object= {};
    // object = Object.assign({name:"esqueree"},object);
    // object = Object.assign({email:"asd@hotmasd.es"},object);
    // $.ajax({
    //     type: 'POST',
    //     url: 'module/profile/model/profile.php',
    //     data: {data: JSON.stringify(object)},
    //     dataType: 'json',
    //     success: function(data){
    //         console.log(data);
    //     }
    // });

    $.ajax({
        type: 'GET',
        url: 'module/profile/model/profile.php?id='+getUserId().responseText,
        dataType: 'json',
        success: function(data){
            console.log(data);
            for (var key in data[0]) {
                // if is the profile_img, set it, if not, set the value of the input
                if (key == "profile_img") {
                    $('#'+key).attr("src", "http://localhost/web_framework_php/media/"+data[0][key]);
                } else if (key == "location") {
                    console.log(data[0][key].split("-")[0]);
                    console.log(getInfoCountry(data[0][key].split("-")[0]));
                } else {
                    // $("#"+key).val(data[0][key]);
                    if (key != "password") {
                        setValueToElement(data,key);
                    }
                }
            }
        }
    });

    $(".file-upload").on('change', function () {
        readURL(this);
    });

    var ok_flag = false;
    $("#dropzone").dropzone({
        url: "module/profile/controller/controller_profile.php?upload=true",
        addRemoveLinks: true,
        maxFileSize: 1000,
        dictResponseError: "An error has occurred on the server",
        acceptedFiles: 'image/*,.jpeg,.jpg,.png,.gif,.JPEG,.JPG,.PNG,.GIF',
        init: function () {
            this.on("success", function (file, response) {
                response = JSON.parse(response);
                //alert(response);
                $("#progress").show();
                $("#bar").width('100%');
                $("#percent").html('100%');
                $('.msg').text('').removeClass('msg_error');
                $('.msg').text('Success Upload image!!').addClass('msg_ok').animate({ 'right': '300px' }, 300);
                if (response['result']) 
                    ok_flag = true;
                else
                    ok_flag = false;
            });
        },
        complete: function (file) {
            console.log(ok_flag);
            if((file.status == "success") && (ok_flag)){
            // alert("El archivo se ha subido correctamente: " + file.name);
            // console.log(file);
            $('.avatar').attr("src","media/"+getUserId().responseText+"_"+file.name);
            } else {
                removeFile(file);
            }
        },
        error: function (file) {
            // alert("Error subiendo el archivo " + file.name);
            // console.log(file);
        },
        removedfile: function (file, serverFileName) {
            removeFile(file);
            $('.avatar').attr("src","media/default-avatar.png");
            ok_flag = false;
        }
    });//End dropzone

    // middleware for profile
    if (page_pro == "profile" && getUserId().responseText == "no logged") {
        window.location.href = "index.php?page=login";
    }

    // update button
    $('#profile_update_btn').on("click",function(){

        var object2= {};
        object2 = Object.assign($("#profile_form").serializeJSON(),object2);
        object2['profile_img'] = $('.avatar')[0].src.split("/")[5]; // also add the profile img
        object2['location'] = $($("option:selected", $($("#provinces")[0]))[0]).val(); // also add the location
        console.log(object2);

        // TODO: cambiar a una funcio que faja tot i si falla, que resalte el input que esta mal
        if ( validaemail(object2['email']) && validastring(object2['username']) ) {

            
            $.ajax({
                type: 'PUT',
                url: 'module/profile/model/profile.php?ID='+getUserId().responseText,
                data: {data: object2},
                dataType: 'json',
                success: function(data){
                    console.log(data);
                    // if (data) {
                    //     window.location.href="?page=profile";
                    // }
                }
            });

        } else
            console.log("The input info don't matches with the regex.");
    });
});

function removeFile(file) {
    var name = file.name;
    $.ajax({
        type: "POST",
        url: "module/profile/controller/controller_profile.php?delete=true",
        data: "filename=" + name,
        success: function (data) {
            $("#progress").hide();
            $('.msg').text('').removeClass('msg_ok');
            $('.msg').text('').removeClass('msg_error');
            $("#e_avatar").html("");
            ok_flag = false;
            var element2;
            if ((element2 = file.previewElement) !== null) {
                element2.parentNode.removeChild(file.previewElement);
            } else {
                    return false;
            }
        }
    });
}

function setValueToElement(data,key) {
    var elems = document.querySelectorAll("#"+key);
    // console.log(elems);
    if (elems.length == 1) {
        $("#"+key).val(data[0][key]);
    } else if (elems.length > 1){
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].nodeName.toLowerCase() == "input") {
                elems[i].value = data[0][key];
            } else {
                elems[i].innerHTML = data[0][key];
            }
        }
    }
}


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
function getLocation(filename) {
    // posible args ( 1- "countries.json", 2 - countries/xxxxxxxx.json ) 
    return $.ajax({
        type: 'GET',
        url: 'resources/'+filename,
        async: false,
        dataType: 'json',
        success: function(data){
            // console.log(data);
        }
    }).responseJSON;
}

function getInfoCountry(code) {
    var rtn = {};
    var jsonobj = getLocation("countries.json");
    console.log(jsonobj);
    jsonobj.forEach(country => {
        // console.log(country);
        if (country['code'] == code)
            rtn = country;
        else 
            rtn = "not found";
        return rtn;
    });
}