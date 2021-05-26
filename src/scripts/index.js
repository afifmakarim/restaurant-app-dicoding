import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

let menu = document.querySelector('#hamburger');
menu.addEventListener('click', (e) => {
  document.querySelector('#drawer ul').classList.toggle('active');
});
// const hamburgerButtonElement = document.querySelector('#hamburger');
// const drawerElement = document.querySelector('#drawer');

// hamburgerButtonElement.addEventListener('click', (event) => {
//   drawerElement.classList.toggle('open');
//   event.stopPropagation();
// });
