var navbar = document.getElementById("navbar");
var navbarTitle = document.getElementById("title");

navbar.onmouseover = function(){
    navbarTitle.style.fontSize = "220%";
    navbarTitle.style.bottom = "20px";
};

navbar.onmouseout = function(){
    navbarTitle.style.fontSize = "200%";
    navbarTitle.style.bottom = "15px";
};