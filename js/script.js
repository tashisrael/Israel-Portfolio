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
      navLinks.forEach((link) => link.classList.remove('active'));
      const current = document.querySelector(`header nav a[href="#${id}"]`);
      if (current) current.classList.add('active');
    }
  });

  /* Make header sticky */
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* Close mobile menu on scroll */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({ distance: '60px', duration: 1400, delay: 150 });

ScrollReveal().reveal('.home-content, .heading, .section-intro', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.portfolio-box', { origin: 'bottom', interval: 120 });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

new Typed('.multiple-text', {
  strings: [
    'Full-Stack Software Developer',
    'Android Developer',
    'Problem Solver',
    'Database Admin',
    'Tech Enthusiast',
    'Digital Marketer',
  ],
  typeSpeed: 50,
  backSpeed: 10,
  backDelay: 1000,
  loop: true,
});

/* The pop up menu (built once, listeners attached once) */
const modal = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
const closeBtn = document.querySelector('[data-close-button]');

const closeModal = () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  modal.querySelectorAll('.modal-image, .modal-details').forEach((el) => el.remove());
};

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const popUpMenu = (project) => {
  closeModal();
  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  img.classList.add('modal-image');

  const details = document.createElement('div');
  details.classList.add('modal-details');
  details.innerHTML = `
    <h3 class="modal-header"></h3>
    <p class="project-details"></p>
    <div class="popup-btns-container">
      <a class="btn project-btns" target="_blank" rel="noopener">GitHub</a>
      <a class="btn project-btns" target="_blank" rel="noopener">Live</a>
    </div>`;
  details.querySelector('.modal-header').textContent = project.title;
  details.querySelector('.project-details').textContent = project.details;
  const [repo, live] = details.querySelectorAll('.project-btns');
  repo.href = project.githubLink;
  live.href = project.liveLink;

  modal.append(img, details);
  modal.classList.add('active');
  overlay.classList.add('active');
};

/* Projects (edit this list to add or change projects) */
const projectsArr = [
  {
    image: 'images/project_screen_shots/project2.PNG',
    title: 'Awesome Books',
    tags: ['JavaScript', 'ES6'],
    githubLink: 'https://github.com/tashisrael/awesome-books',
    liveLink: 'https://tashisrael.github.io/awesome-books/',
    details:
      'This project showcases a Single Page Application featuring a medium-fidelity wireframe of a book management app that stores books that can be added and deleted. It was developed primarily using JavaScript and strict ES6 features.',
  },
  {
    image: 'images/project_screen_shots/project1.png',
    title: 'BMW CC Global Summit Website',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubLink: 'https://github.com/tashisrael/Capstone1/',
    liveLink: 'https://tashisrael.github.io/Capstone1/',
    details:
      'This is a Capstone Project template for an BMW CC Global Summit built with HTML, CSS, and JavaScript. A user can be able to see what the summit is about and view featured speakers.',
  },
  {
    image: 'images/project_screen_shots/project3.PNG',
    title: 'To-Do-List',
    tags: ['JavaScript', 'ES6', 'Webpack'],
    githubLink: 'https://github.com/tashisrael/To-Do-List',
    liveLink: 'https://tashisrael.github.io/To-Do-List/dist/',
    details:
      'This project features a Single Page Application featuring a medium fidelity wireframe of a to-do-list app that stores tasks that a user adds. These tasks can be marked as completed or incomplete. They can also be edited or deleted. This project is built mainly with JavaScript and strict ES6 features and bundled with Webpack.',
  },
  {
    image: 'images/project_screen_shots/project5.PNG',
    title: 'LeaderBoard Website',
    tags: ['JavaScript', 'API', 'Webpack'],
    githubLink: 'https://github.com/tashisrael/LeaderBoard',
    liveLink: 'https://tashisrael.github.io/LeaderBoard/dist/',
    details:
      'This is a website (desktop version) for tracking leaderboard scores from an API, built using Webpack and served by a Webpack dev server. Click the refresh button after adding a score.',
  },
  {
    image: 'images/project_screen_shots/project6.png',
    title: 'API-based Web App For Pokemons',
    tags: ['JavaScript', 'API'],
    githubLink: 'https://github.com/gandradep/API-basedWebApp',
    liveLink: 'https://gandradep.github.io/API-basedWebApp/dist/',
    details:
      'This app shows 20 Pokemon characters fetched from the Pokeapi. You can interact with each one, giving them a like or adding a comment. When you press the comment button, a pop-up window shows more details about the Pokemon and the comments left for it.',
  },
  {
    image: 'images/project_screen_shots/project8.png',
    title: 'Calculator App',
    tags: ['Single Page App'],
    githubLink: 'https://github.com/tashisrael/Math-Magicians',
    liveLink: 'https://calculator-app-by-tash.netlify.app/',
    details:
      '"Math Magicians" is a website (desktop version) for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
  },
];

/* Render projects */
const projectsContainer = document.querySelector('.portfolio-container');

projectsArr.forEach((proj) => {
  const card = document.createElement('article');
  card.classList.add('portfolio-box');
  card.innerHTML = `
    <div class="project-shot"><img loading="lazy"></div>
    <div class="project-body">
      <h4></h4>
      <ul class="project-tags"></ul>
      <p></p>
      <div class="project-links">
        <button type="button" class="btn-ghost primary">Details</button>
        <a class="btn-ghost live" target="_blank" rel="noopener">Live</a>
        <a class="btn-ghost repo" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>`;
  const img = card.querySelector('img');
  img.src = proj.image;
  img.alt = `${proj.title} screenshot`;
  card.querySelector('h4').textContent = proj.title;
  card.querySelector('p').textContent = proj.details;
  card.querySelector('.live').href = proj.liveLink;
  card.querySelector('.repo').href = proj.githubLink;
  const tagList = card.querySelector('.project-tags');
  (proj.tags || []).forEach((t) => {
    const li = document.createElement('li');
    li.textContent = t;
    tagList.appendChild(li);
  });
  card.querySelector('.primary').addEventListener('click', () => popUpMenu(proj));
  projectsContainer.appendChild(card);
});
