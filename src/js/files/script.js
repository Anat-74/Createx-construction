// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js"  ;

const videoBlock = document.querySelector('.video-block');
const video = document.querySelector('video');
const btnPlay = document.querySelector('.video-block__btn-play');

btnPlay.addEventListener('click', () => {
   videoBlock.classList.add('video-block--played');
   video.play();
   video.controls = true;
   btnPlay.classList.add('video-block__btn-play--played');
});

video.onpause = function() {
   videoBlock.classList.remove('video-block--played');
   video.controls = false;
   btnPlay.classList.remove('video-block__btn-play--played');
};

//!==================================================================================================

const circles = document.querySelectorAll('.list__circle');
circles.forEach(el => {
  if (el.dataset.percentage == 'true') {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.list__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let full = el.dataset.full;
    let value = el.dataset.value;
    let percentageProgress = Math.floor(value / full * 100);
    valueBlock.textContent = value;
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  } else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.list__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;
    let percent = el.dataset.percent;
    let percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';
    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
});

//!=================================================================================================

const rowIcons = document.querySelector('.row-icons');
const rowIconsItemsBtn = document.querySelectorAll('.row-icons__items-btn');
if(rowIcons) {
rowIcons.addEventListener('click', (e) => {
   const target = e.target;

     if(target.classList.contains('row-icons__items-btn')); {

      rowIconsItemsBtn.forEach(el => {
      el.classList.remove('row-icons__items-btn--active')
   });

      target.classList.add('row-icons__items-btn--active');
      rowIcons.classList.remove('row-icons__items-btn--active');
   }
   });
}

