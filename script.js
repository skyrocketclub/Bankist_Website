'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////
//Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //Scrolling to a new section not relative to the viewport
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  //when we pass an object instead
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  //closest method is very vital for delegation
  //We are storing the button that we just clicked on in the click variable...
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

////////////////////////////////////////////////////////////////
//PAGE NAVIGATION

//looping through the node list
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     // console.log('LINK');
//     //A common way to implement Navigation is by tgetting the href of the element to be scrolled to...
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Using Event Delegation
//1. Add event Listener to common parent element
//2. Determine what element originated the event

//Adding the event listener to the general element since the event bubbles up always... to the root
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //You know which element brought about the events
  console.log(e.target);
  e.preventDefault();
  //We select only the link elements itself so that we focus on the particular elements that we are interested in...
  if (e.target.classList.contains('nav__link')) {
    console.log('LINK');

    // console.log('LINK');
    //A common way to implement Navigation is by tgetting the href of the element to be scrolled to...
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////////////////////////
//LECTURES
//SELECTING, CREATING,INSERTING AND DELETING ELEMENTS...

//Selecting the entire page...
// console.log(document.documentElement);
// console.log(document.head);

// //A node list is returned...
// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// document.getElementById('section--1');

// //An html collection is returned
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'We use cookies for improved functionality and analytics.<button class = "btn btn--close-cookie">Got it!</button>';

// //prepend adds the element as the first child of the element in question...
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);

// //getting the style as it appears on the webpage...
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //Working with css custom properties
// //fetching the root
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// //accessing some standard properties of images...
// console.log(logo.alt);

// console.log(logo.className);

// //Setting attributes
// logo.alt = 'Beautiful minimalist logo';
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('src')); //source relative to the folder
// console.log(logo.src); //absolute source

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //when we need to store data in the User Interface...
// console.log(logo.dataset.versionNumber);

// //The methods useful wehn working with classes...
// logo.classList.add('c');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// };
// //This is the one being used now..
// h1.addEventListener('mouseenter', alertH1);

// //removes the event listener after three seconds
// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   //stop propagation when you do not want the event to bubble up to the parent elements
//   // However it seems not to be a very good idea...
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//DOM TRAVERSING....
// const hOne = document.querySelector('h1');

// //reading all the children of h1 that includes 'highlight in its name no matter how deep into the DOM tree
// console.log(hOne.querySelectorAll('.highlight'));
// console.log(hOne.childNodes);
// console.log(hOne.children); //works only for direct children...

// hOne.firstElementChild.style.color = 'white';
// hOne.lastElementChild.style.color = 'skyblue';

// //Going upwards
// console.log(hOne.parentNode);

// //We want to find the header closest related to hOne, mayber a parent
// hOne.closest('.header').style.background = 'var(--gradient-secondary)';

// hOne.closest('h1').style.background = 'var(--gradient-primary)';
// console.log(hOne.previousElementSibling);
// console.log(hOne.nextElementSibling);

// console.log(hOne.parentElement.children);

// //Selecting and editing all the children of the parent excepth the current element
// [...hOne.parentElement.children].forEach(function (e) {
//   if (e != hOne) e.style.transform = 'scale(0.5)';
// });
