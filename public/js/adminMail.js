const closeMail = document.querySelector('.close-btn');
const newBtn = document.querySelector('.new-btn');
const rightSide = document.querySelector('.rightSide');

async function removeAll() {
  try {
    const response = await fetch('/admin/mail/remove/all', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    closeMail.click();
  } catch (err) {
    console.log('ошибка в fetch removeAll ');
  }
}

rightSide?.addEventListener('click', async (e) => {
  if (e.target.classList.contains('p-btn-close')) {
    const idEl = e.target.id;
    const btn = document.getElementById(idEl);

    btn.remove();
    const response = await fetch('/admin/mail', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idEl }),
    });
  }
});

closeMail?.addEventListener('click', async () => {
  try {
    const leftSide = document.querySelector('.leftSide');
    const chekDiv = document.querySelector('.removeAll');
    if (!chekDiv) {
      const div = document.createElement('div');
      leftSide.append(div);

      div.className = 'removeAll';

      div.innerHTML = `<button onClick="removeAll()" type="button" className="btn-msg remove-all-btn">
        удалить все
        </button>`;
      const chekDive = document.querySelector('.removeAll');

      //   chekDive.addEventListener('click', async () => {
      //     console.log('test worked');
      //     try {
      //       const response = await fetch('/admin/mail/?remove=all', {
      //         method: 'PUT',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //       });
      //     } catch (err) {
      //       console.log('ошибка в fetch removeAll ');
      //     }
      //   });
    }

    const res = await fetch('/admin/mail/closed?remove=true', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();
    console.log(response, '<<<<<<RES from back');

    rightSide.innerHTML = '';

    response.forEach((msg) => {
      rightSide.innerHTML += `  
      <div class="mail-container" id=${msg.id}>
      <p class="p-main-container">
        <button type="button" class="p-btn-close" id=${msg.id}>
          X
        </button>
        <b>Имя:</b> ${msg.name}
      </p>
      <p class="p-main-container">
        <b>Номер телефона:</b> ${msg.number}
      </p>
      <p class="p-main-container">
        <b>Почта: </b>
        ${msg.email}
      </p>
      <p class="p-main-container">
        <b>Вопрос:</b> ${msg.question}
      </p>
   
    </div>`;
    });
  } catch (err) {
    console.log(err, 'ошибка в fetch closeMail');
  }
});

newBtn?.addEventListener('click', async () => {
  try {
    const chekDiv = document.querySelector('.removeAll');
    if (chekDiv) {
      chekDiv.remove();
    }
    const res = await fetch('/admin/mail/closed?remove=false', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await res.json();

    rightSide.innerHTML = '';

    response.forEach((msg) => {
      rightSide.innerHTML += `  
      <div class="mail-container" id=${msg.id}>
      <p class="p-main-container">
        <button type="button" class="p-btn-close" id=${msg.id}>
          X
        </button>
        <b>Имя:</b> ${msg.name}
      </p>
      <p class="p-main-container">
        <b>Номер телефона:</b> ${msg.number}
      </p>
      <p class="p-main-container">
        <b>Почта: </b>
        ${msg.email}
      </p>
      <p class="p-main-container">
        <b>Вопрос:</b> ${msg.question}
      </p>
   
    </div>`;
    });
  } catch (err) {
    console.log(err, 'ошибка в fetch closeMail');
  }
});

// const btnRemoveAll = document.querySelector('.remove-all-btn');
// if (btnRemoveAll) {
//   console.log(btnRemoveAll, '<<<<<<btn');

// } else {
//   const btnRemoveAll = document.querySelector('.remove-all-btn');
// }
