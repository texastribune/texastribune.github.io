import Typewriter from 'typewriter-effect/dist/core';
 
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  strings: ['<  engineering />', '< open source  />'],
  autoStart: true,
  loop: true,
  delay: 100,
});
