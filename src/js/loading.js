import gsap from 'gsap';

const loading = document.getElementById('loading');
const precent = loading.querySelector('span');

window.addEventListener('load', () => {
  gsap.to(loading, 1, { top: '-200%' });
  gsap.to(precent, 1, { bottom: '-200%' });

  const blocks = document.querySelectorAll('.promo > div');
  const time = document.getElementById('time');
  const linksL = document.getElementsByTagName('a');

  gsap.to(blocks[0], 1.8, { translateY: 0, translateX: 0 });
  gsap.to(blocks[1], 1.4, { translateY: 0, translateX: 0 });
  gsap.to(blocks[2], 1.8, { translateY: 0, translateX: 0 });
  gsap.to(blocks[3], 2, { translateY: 0, translateX: 0 });
  gsap.to(blocks[4], 1.6, { translateY: 0, translateX: 0 });
  gsap.to(time, 2.5, { translateY: 0, translateX: 0 });
  gsap.to(linksL[4], 4, { translateY: 0, translateX: 0 });
  gsap.to(linksL[3], 4.2, { translateY: 0, translateX: 0 });
  gsap.to(linksL[2], 4.4, { translateY: 0, translateX: 0 });
  gsap.to(linksL[1], 4.6, { translateY: 0, translateX: 0 });
  gsap.to(linksL[0], 4.8, { translateY: 0, translateX: 0 });
});
