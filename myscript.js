



var menu_icon = document.getElementById("menu_icon")
var menu = document.getElementById("navbar_js");
var x = document.getElementById("x");

// var main = document.getElementsByTagName("main");


menu_icon.addEventListener("click", function() {
    menu_icon.style.display = "none";
    menu.style.display = "grid";
})

x.addEventListener("click", function() {
    menu_icon.style.display = "block";
    menu.style.display = "none";
})


// main.addEventListener("click", function() {
//     menu_icon.style.display = "block";
//     menu.style.display = "none";
// })



