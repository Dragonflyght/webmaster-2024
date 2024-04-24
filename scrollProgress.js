document.getElementById("body").onscroll = function scrollProgress() {
  elements = ["about","solar","wind","geo", "hydro", "marine", "bio", "cost", "env"]
  var scrolltotop = document.scrollingElement.scrollTop;
  var currentElement = elements[0];
  var switchPercent = 0.2;
  for (index in elements) {
    document.getElementById("link-section-"+elements[index]).classList.remove("active-page-location");
  }
  for (index in elements) {
    element=elements[index];
    var target = document.getElementById("section-"+element);
    var yvalue = target.offsetTop;
    var distance = scrolltotop - yvalue;
    if (distance - (window.innerHeight * switchPercent) < 0){
      console.log(distance, window.innerHeight, switchPercent, (distance - (window.innerHeight * switchPercent)))
      currentElement = element;
      break;
    }
  }
  console.log(currentElement);
  document.getElementById("link-section-"+currentElement).classList.add("active-page-location");
  // document.getElementById("learn-background-image").style.backgroundImage = "url('assets/learn-bg-images/"+currentElement+".jpg)"
  document.getElementById("learn-background-image").style.backgroundImage = "url('assets/learn-bg-images/"+currentElement+".jpg')";
  // console.log(document.getElementById('learn-background-image').style.backgroundImage);
}

