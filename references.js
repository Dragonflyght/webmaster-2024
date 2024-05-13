document.getElementById("body").onscroll = function scroll() {
  elements = {
    "references-header": [50, -100],
  }
  var scrolltotop = document.scrollingElement.scrollTop;
  for (element in elements) {
    var target = document.getElementById(element);
    var xvalue = elements[element][0];
    var yoffset = target.offsetTop;
    var factor = elements[element][1];
    console.log(xvalue, yoffset, factor);
    var yvalue = ((((scrolltotop-yoffset) / window.innerHeight) * factor) + 70);
    console.log(yvalue);
    target.style.backgroundPosition = xvalue + "% " + yvalue + "%";
  }


  
}

