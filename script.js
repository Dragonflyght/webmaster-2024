document.getElementById("body").onscroll = function myFunction() {
    console.log("Test")
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("home-header");
    var xvalue = "center";
    var factor = 40;
    console.log(scrolltotop);
    console.log(window.innerHeight);
    var yvalue = ((scrolltotop / window.innerHeight) * factor) + 50;
    target.style.backgroundPosition = xvalue + " " + yvalue + "%";
  }