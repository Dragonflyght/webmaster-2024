document.getElementById("programs-body").onscroll = function scroll() {
  elements = {
    "programs-header": [50, -40],
  }
  var scrolltotop = document.scrollingElement.scrollTop;
  for (element in elements) {
    var target = document.getElementById(element);
    var xvalue = elements[element][0];
    var yoffset = target.offsetTop;
    var factor = elements[element][1];
    console.log(xvalue, yoffset, factor);
    var yvalue = ((((scrolltotop-yoffset) / window.innerHeight) * factor) + 50);
    console.log(yvalue);
    target.style.backgroundPosition = xvalue + "% " + yvalue + "%";
  }


  
}

