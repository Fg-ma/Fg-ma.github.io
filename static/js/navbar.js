// logic behind the navbar
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("nexusTitle").style.fontSize = "300%";
    } else {
      document.getElementById("navbar").style.padding = "60px 10px";
      document.getElementById("nexusTitle").style.fontSize = "450%";
    }
}
