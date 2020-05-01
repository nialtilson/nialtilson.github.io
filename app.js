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

$.get("navbar.html", function(data){
  $("#nav-placeholder").replaceWith(data);
});
