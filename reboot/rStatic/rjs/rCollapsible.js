var coll = document.getElementsByClassName("collapsible");
var i;

coll[0].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('programingCoding');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});

coll[1].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('cad');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});

coll[2].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('audio');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});

coll[3].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('images');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});

coll[4].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('gameDevelopement');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});

coll[5].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('launchers');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});

coll[6].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = document.getElementById('games');
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  };
});