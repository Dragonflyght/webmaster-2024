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


document.addEventListener("DOMContentLoaded", function() {
  const cardTexts = document.querySelectorAll(".reveal-block-text");
  let maxLines = 0;

    // Helper function to calculate the number of lines a text block occupies
    function calculateLines(element) {
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        return Math.ceil(element.scrollHeight / lineHeight);
    }

    // Calculate the number of lines each text occupies
    cardTexts.forEach(cardText => {
        const lines = calculateLines(cardText);
        if (lines > maxLines) {
            maxLines = lines;
        }
    });

    // Add <br> tags to each text to make them have the same number of lines
    cardTexts.forEach(cardText => {
        const lines = calculateLines(cardText);
        const linesToAdd = maxLines - lines;
        if (linesToAdd > 0) {
            let textContent = cardText.innerHTML;
            const words = textContent.split(' ');
            const insertPositions = [];

            // Calculate positions to insert <br> tags
            for (let i = 1; i <= linesToAdd; i++) {
                insertPositions.push(Math.floor(words.length * i / (linesToAdd + 1)));
            }

            // Insert <br> tags into the appropriate positions
            insertPositions.reverse().forEach(pos => {
                words.splice(pos, 0, '<br>');
            });

            // Update the text content with inserted <br> tags
            cardText.innerHTML = words.join(' ');
        }
    });
});
