//Main Navigation Menu Callout
$.get("https://nialtilson.github.io/navbar.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});

//Main Navigation Menu Callout for [BLOG] Deutschland, Here We Go! Pages
$.get("https://nialtilson.github.io/navbar-blog-dhwg.html", function(data){
  $("#nav-placeholder-dhwg").replaceWith(data);
});

//Main Navigation Menu Callout for [BLOG] Wandering the World with Nial Pages
$.get("https://nialtilson.github.io/navbar-blog-wtwwn.html", function(data){
  $("#nav-placeholder-wtwwn").replaceWith(data);
});

//Main Navigation Menu Callout for [BLOG] Deutschland, Here We Go Again! Pages
$.get("https://nialtilson.github.io/navbar-blog-dhwga.html", function(data){
  $("#nav-placeholder-dhwga").replaceWith(data);
});

//Main Navigation Menu Callout for [BLOG] Wandering into the Unknown with Nial Pages
$.get("https://nialtilson.github.io/navbar-blog-wituwn.html", function(data){
  $("#nav-placeholder-wituwn").replaceWith(data);
});

//Main Navigation Menu Callout for [PROJECT] Woodworking
$.get("https://nialtilson.github.io/navbar-prj-wood.html", function(data){
  $("#nav-placeholder-wood").replaceWith(data);
});

//Main Navigation Menu Callout for [PROJECT] Bikes
$.get("https://nialtilson.github.io/navbar-prj-bikes.html", function(data){
  $("#nav-placeholder-bikes").replaceWith(data);
});

//Main Navigation Menu Callout for [PROJECT] Other
$.get("https://nialtilson.github.io/navbar-prj-other.html", function(data){
  $("#nav-placeholder-other").replaceWith(data);
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

//Script for Page Section Links in Dropdown
var coll = document.getElementsByClassName("collapsible_body");
var k;

for (k = 0; k < coll.length; k++) {
  coll[k].addEventListener("click", function() {
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
