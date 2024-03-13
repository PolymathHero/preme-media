document.addEventListener("DOMContentLoaded", function() {
    // Get the landing page CTA button
    var landingPageCTAButton = document.querySelector('.landing-page-cta-button');
  
    // Add click event listener to the button
    landingPageCTAButton.addEventListener('click', function() {
      // Get the HTML element
      var htmlElement = document.documentElement;
  
      // Add the class to the HTML element
      htmlElement.classList.add('after-landing-page-cta-clicked');
    });
  });