const iconWhatsApp = document.getElementById('btn-wsApp');
const iconViber = document.getElementById('btn-viber');
const iconVk = document.getElementById('btn-vk');
const iconTg = document.getElementById('btn-tg');

const { feedBack } = document.forms;
console.log(feedBack, '<<<<<FORM');

iconWhatsApp.addEventListener('click', () => {
  window.location = 'https://www.whatsapp.com/';
});
iconViber.addEventListener('click', () => {
  window.location = 'https://www.viber.com/';
});

iconVk.addEventListener('click', () => {
  window.location = 'https://vk.com/';
});

iconTg.addEventListener('click', () => {
  window.location = 'https://web.telegram.org/';
});

feedBack.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    const data = new FormData(feedBack);
    const response = await fetch('/feedBack', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    if (response.ok) {
      console.log(
        'Ваше обращение отправленно, ожидайте ответа в ближайшее время'
      );
    }
  } catch (err) {
    console.log(err, 'ошибка в fetch feedBack');
  }
});
