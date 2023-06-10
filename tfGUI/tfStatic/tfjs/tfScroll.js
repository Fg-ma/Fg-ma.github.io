// logic behind the size of the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.height = "55px";
      document.getElementById("title").style.fontSize = "200%";
      document.getElementById("title").style.top = "5px";
      document.getElementById("homeButton").style.top = "2.5px";
      document.getElementById("contactButton").style.top = "2.5px";
      document.getElementById("aboutButton").style.top = "2.5px";
    } else {
      document.getElementById("navbar").style.height = "90px";
      document.getElementById("title").style.fontSize = "220%";
      document.getElementById("title").style.top = "22.5px";
      document.getElementById("homeButton").style.top = "22.5px";
      document.getElementById("contactButton").style.top = "22.5px";
      document.getElementById("aboutButton").style.top = "22.5px";
    };
}