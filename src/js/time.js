import moment from 'moment-timezone';
const time = document.getElementById('time');

const hours =
    moment().tz('Europe/Moscow').hour() < 10
      ? '0' + moment().tz('Europe/Moscow').hour()
      : moment().tz('Europe/Moscow').hour(),
  minutes =
    moment().tz('Europe/Moscow').minutes() < 10
      ? '0' + moment().tz('Europe/Moscow').minutes()
      : moment().tz('Europe/Moscow').minutes();
time.innerHTML = `KZN / ${hours}:${minutes}`;

setInterval(() => {
  const hours =
      moment().tz('Europe/Moscow').hour() < 10
        ? '0' + moment().tz('Europe/Moscow').hour()
        : moment().tz('Europe/Moscow').hour(),
    minutes =
      moment().tz('Europe/Moscow').minutes() < 10
        ? '0' + moment().tz('Europe/Moscow').minutes()
        : moment().tz('Europe/Moscow').minutes();
  time.innerHTML = `KZN / ${hours}:${minutes}`;
}, 10000);
