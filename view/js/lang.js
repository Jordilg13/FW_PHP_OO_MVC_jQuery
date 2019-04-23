function changeLang(lang){

    lang = lang || localStorage.getItem('app-lang') || 'en';
    localStorage.setItem('app-lang', lang);
    // console.log(lang);
    $.ajax({ 
        type: 'GET', 
        url: '/view/languages/'+lang+'.json', 
        dataType: 'json',
        success: function (data) { 
            var elems = document.querySelectorAll('[data-tr]');
            for (var x = 0; x < elems.length; x++) {
                elems[x].innerHTML = data.hasOwnProperty(lang)
                ? data[lang][elems[x].dataset.tr]
                : elems[x].dataset.tr;
            }
        }
    });
}    

window.onload = function(){
    changeLang();
    langs = {"en":0, "es":1, "va":2};
    document.getElementById("state").options.selectedIndex = langs[localStorage.getItem('app-lang') || 'en'];
    $("#state").on("change", function(){
        changeLang(this.options[this.selectedIndex].value);
    });
  }