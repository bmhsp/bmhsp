// =========
//  Navbar
// =========
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const navbar = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
});

window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

$('.nav-link').on('click', function (e) {
    let aim = $(this).attr('href');
    let targetAim = $(aim);

    $('html, body').animate({
        scrollTop: targetAim.offset().top - 100
    }, 1000)

    e.preventDefault();
    console.log(targetAim);
});

// ======================
//  Scrolling Animation
// ======================
const scrollElements = document.querySelectorAll('.js-scroll');

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


// =================
//  Project SLider
// =================
const slide = document.querySelector('.slide-image');
const images = document.querySelectorAll('.slide-image img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listener
nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id === 'firstClone') {
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});