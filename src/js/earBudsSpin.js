const earbuds = document.getElementById('earbuds');

const rectX = earbuds.width / 60,
  rectY = earbuds.height;

let w = 0;
setInterval(() => {
  w = w + 1;
  earbuds.style.transform = `translate(-${rectX * (w - 1)}px, -50%)`;
  earbuds.style.clip = `rect(0,${rectX * w}px,${rectY}px, ${
    rectX * (w - 1)
  }px)`;
  if (w === 60) {
    w = 0;
  }
}, 50);
