// logic behind the size of the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "";
      document.getElementById("title").style.fontSize = "140%";
      document.getElementById("navbarButtonOne").style.padding = "6px";
      document.getElementById("navbarButtonTwo").style.padding = "6px";
      document.getElementById("navbarButtonThree").style.padding = "6px";
      document.getElementById("navbarButtonOne").style.marginTop = "20px";
      document.getElementById("navbarButtonTwo").style.marginTop = "20px";
      document.getElementById("navbarButtonThree").style.marginTop = "20px";
    } else {
      document.getElementById("navbar").style.padding = "";
      document.getElementById("title").style.fontSize = "250%";
      document.getElementById("navbarButtonOne").style.padding = "12px";
      document.getElementById("navbarButtonTwo").style.padding = "12px";
      document.getElementById("navbarButtonThree").style.padding = "12px";
      document.getElementById("navbarButtonOne").style.marginTop = "30px";
      document.getElementById("navbarButtonTwo").style.marginTop = "30px";
      document.getElementById("navbarButtonThree").style.marginTop = "30px";
    };
}