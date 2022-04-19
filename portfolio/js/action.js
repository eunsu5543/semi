'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  //메뉴높이보다 더 아래로 스크롤 되었을 경우
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }else{
    navbar.classList.remove('navbar--dark');
  }
});

//메뉴를 클릭할 때 스크롤 처리
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => { 
  const target = event.target;
  const link = target.dataset.link;
  scrollIntoView(link);
});

//화면이 작아질 때 사용되는 햄버거 버튼 클릭하면 메뉴 오픈
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});


//contact me 버튼 클릭할 때 스크롤 처리
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
//홈높이의 1/2보다 더 아래로 스크롤 할 때 화살표 버튼 표시
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
    arrowUp.classList.remove('visible');
  }
});

//화살표 버튼 클릭할 때 스크롤 처리
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//프로젝트 카테고리 버튼 클릭할 때 관련된 프로젝트만 보이게 처리
const workBtnContainer = document.querySelector('.project__categories');
const projectContainer = document.querySelector('.projects__list');
const projects = document.querySelectorAll('.project'); 
workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  if(filter == null) return;
  projectContainer.classList.add('anim-out');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  projects.forEach((project) => {
    if(filter === '*' || filter === project.dataset.type){
      project.classList.remove('invisible');
    }else{
      project.classList.add('invisible');
    }
  });
  setTimeout(() => {
    projectContainer.classList.remove('anim-out');
  }, 300);
});

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}