import Parallax from 'parallax-js';

let scene = document.querySelectorAll('.parallax');
scene.forEach((prop) => new Parallax(prop));
import gsap from 'gsap'

const eye = document.querySelectorAll('.eye');

document.body.addEventListener('mousemove', (e) => {
  eye.forEach((prop) => {
    const x = prop.getBoundingClientRect().left + prop.clientWidth / 2;
    const y = prop.getBoundingClientRect().top + prop.clientHeight / 2;

    const radian = Math.atan2(e.pageX - x, e.pageY - y);
    const rotation = radian * (180 / Math.PI) * -1 + 270;
    gsap.to(prop, 2, {rotate: `${rotation}deg`})
  });
});
