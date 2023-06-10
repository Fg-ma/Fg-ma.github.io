var navbar = document.getElementById("navbar");
var navbarTitle = document.getElementById("title");

navbar.onmouseover = function(){
    navbar.style.fontSize = "20px";
    navbarTitle.style.bottom = "20px";
};

navbar.onmouseout = function(){
    navbar.style.fontSize = "18px";
    navbarTitle.style.bottom = "15px";
};