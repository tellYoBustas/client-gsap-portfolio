import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursor'),
    follower = document.getElementById('follower'),
    links = document.getElementsByTagName('a');

  gsap.set(cursor, {
    css: {
      left: '100%',
      top: '100%',
    },
  });
  gsap.set(follower, {
    css: {
      left: '100%',
      top: '100%',
    },
  });

  document.body.addEventListener('mousemove', (e) => {
    const cursorMargin = Math.round(
      (window.innerWidth * 1.11111 - window.innerWidth) / 20,
    );
    gsap.to(cursor, 0.1, {
      left: e.clientX - cursorMargin,
      top: e.clientY - cursorMargin,
    });
    gsap.to(follower, 0.6, {
      left: e.clientX - cursorMargin * 4,
      top: e.clientY - cursorMargin * 4,
    });

    cursor.classList.remove('hidden');
    follower.classList.remove('hidden');
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
      cursor.classList.add('active');
      follower.classList.add('active');
    });

    links[i].addEventListener('mouseout', () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
    });
  }

  document.body.addEventListener('mouseout', () => {
    cursor.classList.add('hidden');
    follower.classList.add('hidden');
  });
});
