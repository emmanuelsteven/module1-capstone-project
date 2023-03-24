/* Selecting the divs with the classes of ri-menu-fill, nav-list2, click, and ri-close-fill. */
const hamburgericon = document.querySelector('.ri-menu-fill');
const hamburgermenu = document.querySelector('.nav-list2');
// const hamburgerlist = document.querySelectorAll('.click');;
const menuclose = document.querySelector('.ri-close-fill');

function openHam() {
  menuclose.setAttribute('style', 'display:block');
  hamburgermenu.setAttribute('style', 'display:block');
  hamburgericon.setAttribute('style', 'display:none');
}
hamburgericon.addEventListener('click', openHam);

/**
 * It sets the display attribute of the hamburgerimenu to none, the display attribute of the
 * hamburgericon to block, and the display attribute of the menuclose to none
 */
function closeham() {
  hamburgermenu.setAttribute('style', 'display:none');
  hamburgericon.setAttribute('style', 'display:block');
  menuclose.setAttribute('style', 'display:none');
}
/* It adds an event listener to the menuclose variable, and when clicked, it runs the closeham
function. */
menuclose.addEventListener('click', closeham);
// const about = document.getElementById('aboutHtml');
// about.addEventListener('click', () => {
//   hamburgermenu.classList.add('active');
// });

/**
 * It adds an event listener to each item in the hamburgerlist array, and when clicked, it runs the
 * closeham function.
 */

// hamburgerlist.forEach((item) => { item.addEventListener('click', closeham);});

// chefsobject
/* Selecting the div with the class of chefz. */

const bolechefs = document.querySelector('.chefz');

/* An array of objects. */
const featuredChefs = [
  {
    name: 'chef Agabus Agboye',
    portfolio: 'Chef Agabus Agboye CEO chow country,converner Beans & Buddies.',
    about: 'Agabus Aboye (born 17 AUg 1991) is an English celebrity chef. He is best known for his annual "Beans & Buddies", he has hosted in the past decade.',
    image: './img/gabus.png',
    id: 'flex-chef',
  },
  {
    name: 'chef Fregz',
    portfolio: 'Gbubemi Fregene, better known as Chef Fregz, is a Nigerian chef.',
    about: 'Gbubemi Fregene was born in Abeokuta. He grew up in Benin City. He studied Industrial relations and human resource management at Covenant University and cuisine at Le Cordon Bleu Culinary Institute, France',
    image: './img/cheffreg.png',
    id: 'flex-chef',

  },
  {
    name: 'chef Ehis',
    portfolio: 'Chef Ehis founder of ECCA culinary arts school located in Lagos, Nigeria.',
    about: 'Head chef @Ehis Gourmets, product developer , recipes formulation, menu design ,five star fine dinning concept, team building ,kitchen design,opening and post opening of restaurant.All meal are made from the finest ingredients .',
    image: './img/chefehis.png',
    type: 'more',
  },
  {
    name: 'chef Tahir Muneera',
    portfolio: 'Professional chef and also a Chef Instructor at Red Dish Chronicles.',
    about: 'uneera Tahir (Chef Muse) went on to complete a Diploma in Cuisine and Patisserie at Red Dish Chronicles (RDC) in 2016. After completing her Diploma at RDC, Chef Muse got an internship at L’italiano Restaurant, London and rose rapidly to the position of Head Chef of L’Italiano Restaurant.',
    image: './img/chefmuse.png',
    type: 'more',

  },
  {
    name: 'chef Eros',
    portfolio: 'Chef Eros CEO and founder of Eros & co limited',
    about: 'Chef Eros & Co is the story of an African Hut built on a Mountain of Dreams. With five brands and counting, we have been able to constantly deliver an unforgettable culinary experience and we are here for the long haul.',
    image: './img/cheferos.png',
    type: 'more',
  },
  {
    name: 'chef Ngozika',
    portfolio: 'Ngozika is chef from eastern Nigeria, with 30 years experience in bole making.',
    about: ' Ngozika is seasoned chef that has traversed the breadth an length of Africa making bole in big events.',
    image: './img/chef6.png',
    type: 'more',
  },
];

/**
  * The function cheffun() is called in the body of the html file. It loops through the array of
  * objects called featuredChefs and appends the data to the div with the id of bolechefs
  */

function cheffun() {
  featuredChefs.forEach((chefy) => {
    bolechefs.innerHTML += `<div class="hidden ${chefy.type}" id="${chefy.id}">
        <img src="${chefy.image}" alt="chef">
        <div class="portfolio">
            <h3>${chefy.name}</h3>
            <p class="intro">
               ${chefy.portfolio}
            </p>
            <hr>
            <p class="main"> ${chefy.about}</p>
        </div>
    </div>`;
  });
}
/* Adding an event listener to the window object, and when the window is loaded, it runs the cheffun
function. */
window.addEventListener('load', cheffun);