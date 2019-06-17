const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[0].style.color = "green";
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[1].style.color = "green";
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[2].style.color = "green";
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[3].style.color = "green";
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[4].style.color = "green";
navItems[5].textContent = siteContent["nav"]["nav-item-6"];
navItems[5].style.color = "green";

const lastItem = document.createElement('a');
const firstItem = document.createElement('a');
lastItem.textContent = "Last Item";
firstItem.textContent = "First Item";
nav.appendChild(lastItem);
nav.prepend(firstItem);

// Call To Action 
const cta = document.querySelector('.cta');
const ctaHeader = document.querySelector('h1');
const ctaImg = document.getElementById('cta-img');
const button = document.querySelector('button');

ctaHeader.textContent = siteContent['cta']['h1'];
const br = document.createElement('br');



button.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']["img-src"]);

// MAIN CONTENT
const mainContent = document.querySelector('.main-content');
const mcH4 = document.querySelectorAll('.text-content > h4');
const mcPara = document.querySelectorAll('.text-content > p');

//FEATURES
mcH4[0].textContent = siteContent['main-content']['features-h4'];
mcPara[0].textContent = siteContent['main-content']['features-content'];

//ABOUT
mcH4[1].textContent = siteContent['main-content']['about-h4'];
mcPara[1].textContent = siteContent['main-content']['about-content'];

//MIDDLE IMG
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//SERVICES
mcH4[2].textContent = siteContent['main-content']['services-h4'];
mcPara[2].textContent = siteContent['main-content']['services-content'];

//PRODUCT
mcH4[3].textContent = siteContent['main-content']['product-h4'];
mcPara[3].textContent = siteContent['main-content']['product-content'];

//VISION
mcH4[4].textContent = siteContent['main-content']['vision-h4'];
mcPara[4].textContent = siteContent['main-content']['vision-content'];

//CONTACT
const contactHeader = document.querySelector('.contact > h4');
const contactPara = document.querySelectorAll('.contact > p');

contactHeader.textContent = siteContent['contact']['contact-h4'];
contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];

//FOOTER 
const footerTxt = document.querySelector('footer > p');

footerTxt.textContent = siteContent['footer']['copyright'];
