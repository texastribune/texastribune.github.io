import Typewriter from 'typewriter-effect/dist/core';
 
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  strings: ['<  engineering />', '< open source  />'],
  autoStart: true,
  loop: true,
  delay: 100,
});

// Toggle functionality for details elements
document.addEventListener('DOMContentLoaded', function() {
  const detailsElements = document.querySelectorAll('details');
  
  detailsElements.forEach(function(details) {
    const summary = details.querySelector('summary');
    
    if (summary && summary.textContent.trim() === 'Read more ⬍') {
      details.addEventListener('toggle', function() {
        if (details.open) {
          summary.textContent = 'Close ⬌';
        } else {
          summary.textContent = 'Read more ⬍';
        }
      });
    }
  });
});
