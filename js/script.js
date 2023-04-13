/* toggle icon */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Active navlink styled */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });

  /* Make header sticky */
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Remove toggle */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: '2000',
  delay: '200',
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .services-container, .portfolio-box, .contact form',
  { origin: 'bottom' },
);

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: [
    'Full-Stack Software Developer',
    'Tech Enthusiast',
    'Problem Solver',
    'Database Admin',
    'Android Developer',
    'Digital Marketer',
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

/* The pop up menu */
const popUpMenu = (project) => {
  const popUpModal = document.querySelector('#modal');
  const popUpModalOverlay = document.querySelector('#overlay');
  const popUpModalCloseBtn = document.querySelector('[data-close-button]');

  const popUpImage = document.createElement('img');
  popUpImage.src = project.image;
  popUpImage.classList.add('modal-image');

  const popUpDetails = document.createElement('div');
  popUpDetails.classList.add('modal-details');
  popUpDetails.id = 'modal-details';

  const popUpTitle = document.createElement('h3');
  popUpTitle.classList.add('modal-header');
  popUpTitle.textContent = project.title;
  popUpDetails.appendChild(popUpTitle);

  const popUpText = document.createElement('p');
  popUpText.classList.add('project-details');
  popUpText.textContent = project.details;
  popUpDetails.appendChild(popUpText);

  const repoBtn = document.createElement('a');
  const seeLive = document.createElement('a');
  repoBtn.target = '_blank';
  seeLive.target = '_blank';
  repoBtn.classList.add('btn', 'project-btns');
  seeLive.classList.add('btn', 'project-btns');
  repoBtn.textContent = 'GitHub';
  repoBtn.href = project.githubLink;
  seeLive.textContent = 'Live';
  seeLive.href = project.liveLink;

  const popUpBtnsContainer = document.createElement('div');
  popUpBtnsContainer.classList.add('popup-btns-container');

  popUpBtnsContainer.appendChild(repoBtn);
  popUpBtnsContainer.appendChild(seeLive);

  popUpDetails.appendChild(popUpBtnsContainer);

  popUpModal.appendChild(popUpImage);
  popUpModal.appendChild(popUpDetails);

  popUpModal.classList.add('active');
  popUpModalOverlay.classList.add('active');

  popUpModalCloseBtn.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });

  popUpModalOverlay.addEventListener('click', () => {
    popUpModal.classList.remove('active');
    popUpModalOverlay.classList.remove('active');
    popUpModal.removeChild(popUpImage);
    popUpModal.removeChild(popUpDetails);
  });
};

/* Render projects dynamically */
const projectsArr = [
  {
    image: 'images/project_screen_shots/project2.PNG',
    title: 'Awesome Books',
    githubLink: 'https://github.com/tashisrael/awesome-books',
    liveLink: 'https://tashisrael.github.io/awesome-books/',
    details:
      'This project showcases a Single Page Application featuring a medium-fidelity wireframe of a book management app that stores books that can be added and deleted. It was developed primarily using JavaScript and strict ES6 features.',
  },
  {
    image: 'images/project_screen_shots/project1.png',
    title: 'BMW CC Global Summit Website',
    githubLink: 'https://github.com/tashisrael/Capstone1/',
    liveLink: 'https://tashisrael.github.io/Capstone1/',
    details:
      'This is a Capstone Project template for an BMW CC Global Summit built with HTML, CSS, and JavaScript. A user can be able to see what the summit is about and view featured speakers.',
  },
  {
    image: 'images/project_screen_shots/project3.PNG',
    title: 'To-Do-List',
    githubLink: 'https://github.com/tashisrael/To-Do-List',
    liveLink: 'https://tashisrael.github.io/To-Do-List/dist/',
    details:
      'This project features a Single Page Application featuring a medium fidelity wireframe of a to-do-list app that stores tasks that a user adds. These tasks can be marked as completed or incomplete. They can also be edited or deleted. This project is built mainly with JavaScript and strict ES6 features and bundled with Webpack.',
  },
  {
    image: 'images/project_screen_shots/project5.PNG',
    title: 'LeaderBoard Website',
    githubLink: 'https://github.com/tashisrael/LeaderBoard',
    liveLink: 'https://tashisrael.github.io/LeaderBoard/dist/',
    details: 'This is a website(Desktop version) for tracking Leaderbaord scores from an API built using webpack and served by a webpack dev server. Click the refresh button after adding a score',
  },
  {
    image: 'images/project_screen_shots/project6.png',
    title: 'API-basedWebApp For Pokemons',
    githubLink: 'https://github.com/gandradep/API-basedWebApp',
    liveLink: 'https://gandradep.github.io/API-basedWebApp/dist/',
    details:
      'This app shows 20 Pokemon characters that are fetch from the Pokeapi. You can interact with each one, giving them a like or adding a comment.The moment you press the comment button, a pop-up window will show up with more details about the Pokemon and will also show the comments left for it.',
  },
  {
    image: 'images/project_screen_shots/project8.png',
    title: 'Calculator App',
    githubLink: 'https://github.com/tashisrael/Math-Magicians',
    liveLink: 'https://calculator-app-by-tash.netlify.app/',
    details:
      '"Math magicians" is a website(Desktop version) for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
  },
];

const projectsContainer = document.querySelector('.portfolio-container');

projectsArr.forEach((proj) => {
  const project = document.createElement('div');
  project.classList.add('portfolio-box');

  const projectImg = document.createElement('img');
  projectImg.src = proj.image;
  projectImg.alt = proj.title;

  const layer = document.createElement('div');
  layer.classList.add('portfolio-layer');

  const title = document.createElement('h4');
  title.textContent = proj.title;

  const details = document.createElement('p');
  details.textContent = proj.details;

  const popLink = document.createElement('a');

  const popBtn = document.createElement('i');
  popBtn.classList.add('bx', 'bx-link-external');

  popLink.appendChild(popBtn);

  layer.appendChild(title);
  layer.appendChild(details);
  layer.appendChild(popLink);

  project.appendChild(projectImg);
  project.appendChild(layer);

  projectsContainer.appendChild(project);

  popLink.addEventListener('click', () => {
    popUpMenu(proj);
  });
});
