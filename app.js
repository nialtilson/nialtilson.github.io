//Main Navigation Menu Callout
$.get("https://nialtilson.github.io/navbar.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});

//Main Navigation Menu Callout for Deutschland, Here We Go! Pages
$.get("https://nialtilson.github.io/navbar-dhwg.html", function(data){
  $("#nav-placeholder-dhwg").replaceWith(data);
});

//Main Navigation Menu Callout for Wandering the World with Nial Pages
$.get("https://nialtilson.github.io/navbar-wtwwn.html", function(data){
  $("#nav-placeholder-wtwwn").replaceWith(data);
});

//Main Navigation Menu Callout for Deutschland, Here We Go Again! Pages
$.get("https://nialtilson.github.io/navbar-dhwga.html", function(data){
  $("#nav-placeholder-dhwga").replaceWith(data);
});

//Footer Callout for all pages
$.get("https://nialtilson.github.io/footer.html", function(data){
  $("#footer").replaceWith(data);
});


//Script for Page Section Links in Dropdown
var coll = document.getElementsByClassName("collapsible");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//Script for Slideshow on Main Page
var myIndex = 0;
img_carousel();

function img_carousel() {
  var i;
  var x = document.getElementsByClassName("full");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(img_carousel,3000);
}
