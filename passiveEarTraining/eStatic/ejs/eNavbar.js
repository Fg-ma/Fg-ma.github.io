var navbar = document.getElementById("navbar");
var navbarTitle = document.getElementById("title");

navbar.onmouseover = function(){
    navbarTitle.style.fontSize = "200%";
};

navbar.onmouseout = function(){
    navbarTitle.style.fontSize = "180%";
};