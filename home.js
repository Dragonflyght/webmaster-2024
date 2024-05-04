document.getElementById("body").onscroll = function scroll() {
  elements = {
    "home-header": [50, -30],
    "home-header-environment": [50, -80]
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
  var reveal_elements = document.getElementsByClassName("reveal");
  for (reveal_element in reveal_elements) {
    reveal = reveal_elements[reveal_element];
    if (typeof reveal == "object") {
      if (reveal.classList.contains("reveal-hidden") && reveal.offsetTop < (scrolltotop + window.innerHeight)) {
        reveal.classList.remove("reveal-hidden");
      }
      else if (!reveal.classList.contains("reveal-hidden") && reveal.offsetTop > (scrolltotop + window.innerHeight)) {
        reveal.classList.add("reveal-hidden");
      }
    }
    
  }


  
}

