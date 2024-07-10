const heading = document.querySelector('#my');

const keyframes = {
  opacity: [0,1],
  translate: ['0 50px', 0]
};
const options = {
  duration: 2000,
  easing: 'ease',
};

heading.animate(keyframes, options);

const loading = document.querySelector('#loading');

window.addEventListener('load', () =>{
  loading.classList.add('loaded');
});

const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuOptions = {
  duration: 300,
  easing: 'ease',
  fill: 'forwards',
};

menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw',0]}, menuOptions);
});

menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
});

const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0,1],
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards'
        }
      );
      obs.unobserve(entry.target);
    }
  });
}

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
  fadeObserver.observe(fadeElement);
});

const returnBtn = document.querySelector('.return');

window.addEventListener('scroll', () => {
  if(500 < window.scrollY) {
  returnBtn.classList.add('returnbtn');
} else {
  returnBtn.classList.remove('returnbtn');
}
});


