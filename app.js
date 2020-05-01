
//Main Navigation Menu Callout
$.get("navbar.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});

//Main Navigation Menu Callout for Deutschland, Here We Go! Pages
$.get("navbar_dhwg.html", function(data){
  $("#nav-placeholder-dhwg").replaceWith(data);
});

//Main Navigation Menu Callout for Wandering the World with Nial Pages
$.get("navbar_wtwwn.html", function(data){
  $("#nav-placeholder-wtwwn").replaceWith(data);
});

//Main Navigation Menu Callout for Deutschland, Here We Go Again! Pages
$.get("navbar_dhwga.html", function(data){
  $("#nav-placeholder-dhwga").replaceWith(data);
});

//Footer Callout for all pages
$.get("footer.html", function(data){
  $("#footer").replaceWith(data);
});


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
