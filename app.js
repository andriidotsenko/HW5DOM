// 2. Задача на обробники подій, роботу зі сховищами та атрибутами / вмістом
// Напишіть html код який містить кнопку якраз посередині(вертикально і горизонтально) сторінки.

// В початковому стані — на кнопці має бути текст 'Turn off', 
// фон сторінки має стати світлий.
// Після натиснення — на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn off: { DD - MM - YYYY HH: MM: SS } ',
// де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення
// Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn on: { DD - MM - YYYY HH: MM: SS } ',
// де {DD-MM-YYYY HH:MM:SS} - це формат часу для виведення
// Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження / закриття сторінки.
// Логіку роботи реалізуйте в окремому js - файлі.



const button = document.querySelector('.button-app');
const body = document.body;
const message = document.createElement('div');
message.classList.add('message');
body.appendChild(message);

// При загрузке страницы проверяем состояние в localStorage
const isOn = localStorage.getItem('isOn') === 'true';
const lastChange = localStorage.getItem('lastChange');

if (isOn) {
  body.classList.add('on');
  button.textContent = 'Turn on';
  message.textContent = `Last turn on: ${lastChange}`;
} else {
  body.classList.remove('on');
  button.textContent = 'Turn off';
  message.textContent = `Last turn off: ${lastChange}`;
}

button.addEventListener('click', () => {
  const newIsOn = !body.classList.contains('on');
  const now = new Date();
  const formattedDate = formatDate(now);

  if (newIsOn) {
    message.textContent = `Last turn on: ${formattedDate}`;
  } else {
    message.textContent = `Last turn off: ${formattedDate}`;
  }

  body.classList.toggle('on');
  button.textContent = newIsOn ? 'Turn on' : 'Turn off';

  // Сохраняем состояние в localStorage
  localStorage.setItem('isOn', newIsOn);
  localStorage.setItem('lastChange', formattedDate);
});

function formatDate(date) {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return date.toLocaleDateString('en-US', options);
}
