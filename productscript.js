// Set default visibility when the page loads
window.onload = function() {
  // Show all sections by default
  document.getElementById('description').style.display = 'block';
  document.getElementById('cookies-section').style.display = 'block';
  document.getElementById('cakes-section').style.display = 'block';
  document.getElementById('cupcakes-section').style.display = 'block';

  // Show only the description section first (this will be the section the user starts with)
  document.getElementById('group-17').style.display = 'block';
  
  // Optionally scroll to the description section if you want to make sure the user sees it first
  window.scrollTo(0, document.getElementById('description').offsetTop);
};

// Event listeners for the buttons
document.getElementById('allButton').addEventListener('click', function() {
  // Show all sections
  document.getElementById('logo').style.display = 'block';
  document.getElementById('cookies-section').style.display = 'block';
  document.getElementById('cakes-section').style.display = 'block';
  document.getElementById('cupcakes-section').style.display = 'block';

  // Scroll to the top (description section)
  window.scrollTo(0, document.getElementById('logo').offsetTop);
});

document.getElementById('cakesButton').addEventListener('click', function() {
  // Scroll to the cakes section
  window.scrollTo(0, document.getElementById('cakes-section').offsetTop);
});

document.getElementById('cupcakesButton').addEventListener('click', function() {
  // Scroll to the cupcakes section
  window.scrollTo(0, document.getElementById('cupcakes-section').offsetTop);
});

document.getElementById('cookiesButton').addEventListener('click', function() {
  // Scroll to the cookies section
  window.scrollTo(0, document.getElementById('cookies-section').offsetTop);
});

// Function to handle scrolling to product sections with proper offset
document.addEventListener('DOMContentLoaded', function() {
  // Check if the URL has a hash (fragment identifier)
  if (window.location.hash) {
    // Small delay to ensure page is fully loaded with all styles applied
    setTimeout(function() {
      scrollToProductSection(window.location.hash);
    }, 300);
  } else {
    // If no hash in URL, scroll to top of page
    window.scrollTo(0, 0);
  }
});

// For links to product sections
document.addEventListener('click', function(event) {
  // Check if clicked element is a link or within a link
  const link = event.target.closest('a');
  if (link && link.getAttribute('href') && link.getAttribute('href').includes('#product-')) {
    const hrefAttribute = link.getAttribute('href');
    
    // If it's a link on the same page
    if (hrefAttribute.startsWith('#')) {
      event.preventDefault();
      scrollToProductSection(hrefAttribute);
      
      // Update URL without reloading
      history.pushState(null, null, hrefAttribute);
    }
    // For links to other pages with hashes, let the browser handle it naturally
    // The DOMContentLoaded event will handle the scrolling when the new page loads
  }
});

