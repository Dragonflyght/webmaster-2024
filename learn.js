lastSection = "";

document.getElementById("body").onscroll = function scroll() {
  elements = ["about","solar","wind","geo", "hydro", "marine", "bio", "cost", "env"]
  var scrolltotop = document.scrollingElement.scrollTop;
  var currentElement = elements[0];
  var switchPercent = 0.2;
  for (index in elements) {
    document.getElementById("link-section-"+elements[index]).classList.remove("active-page-location");
    document.getElementById("section-"+elements[index]).classList.remove("learn-section-focus");
  }
  for (index in elements) {
    element=elements[index];
    var target = document.getElementById("section-"+element);
    var yvalue = target.offsetTop;
    var distance = scrolltotop - yvalue;
    if (distance - (window.innerHeight * switchPercent) < 0){
      currentElement = element;
      break;
    }
  }
  console.log(currentElement, lastSection);
  
  document.getElementById("link-section-"+currentElement).classList.add("active-page-location");
  document.getElementById("section-"+currentElement).classList.add("learn-section-focus");
  // document.getElementById("learn-background-image").style.backgroundImage = "url('assets/learn-bg-images/"+currentElement+".jpg)"
  if (currentElement != lastSection) {
    if (document.getElementById("learn-background-image-2").classList.contains("learn-background-image-inactive")) {
      document.getElementById("learn-background-image-2").style.backgroundImage = "url('assets/learn-bg-images/"+currentElement+".jpg')";
      document.getElementById("learn-background-image-2").classList.remove("learn-background-image-inactive");
    } else {
      document.getElementById("learn-background-image-1").style.backgroundImage = "url('assets/learn-bg-images/"+currentElement+".jpg')";
      document.getElementById("learn-background-image-2").classList.add("learn-background-image-inactive");
    }
  }
  lastSection = currentElement;
  // document.getElementById("learn-background-image").style.backgroundImage = "url('assets/learn-bg-images/"+currentElement+".jpg')";
  // console.log(document.getElementById('learn-background-image').style.backgroundImage);
}

