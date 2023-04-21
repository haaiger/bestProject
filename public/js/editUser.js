const userInfoDiv = document.querySelector(".userInfoDiv");
const editUserBtn = document.querySelector(".editUserBtn");
const fullNameDiv = document.querySelector(".fullNameDiv");

const editPassDiv = document.querySelector(".editPassDiv");
const editPassBtn = document.querySelector(".editPassBtn");

// const msg = document.querySelector(".msg");

//слушатель кнопки "edit userInfo"
editUserBtn.addEventListener("click", (event1) => {
  event1.preventDefault();

  const firstName = fullNameDiv.childNodes[0].innerText.slice(0, -1);
  const middlename = fullNameDiv.childNodes[1].innerText.slice(0, -1);
  const lastName = fullNameDiv.childNodes[2].innerText;

  const phone = userInfoDiv.childNodes[1].innerText.slice(9);
  const email = userInfoDiv.childNodes[2].innerText.slice(7);

  const newForm = `
  <form name="editUserForm">
    <input type="text" name="firstName" placeholder="Имя" value=${firstName} />
    <input type="text" name="middleName" placeholder="Фамилия" value=${middlename} />
    <input type="text" name="lastName" placeholder="Отчество" value=${lastName} />
    <input type="text" name="phone" placeholder="Телефон" value=${phone} />
    <input type="email" name="email" placeholder="email" value=${email} />
    <button class="saveUserBtn">Сохранить</button>
    <button class="cancelUserBtn">Отмена</button>
  </form>
  `;
  userInfoDiv.insertAdjacentHTML("afterend", newForm);

  userInfoDiv.className = "hidden";

  const editUserForm = document.getElementsByName("editUserForm")[0];
  const cancelUserBtn = document.querySelector(".cancelUserBtn");

  //слушатель кнопки "отмена" редактирования пользователя
  cancelUserBtn.addEventListener("click", (event2) => {
    event2.preventDefault();
    // const editUserForm = document.getElementsByName("editUserForm")[0];
    editUserForm.remove();
    userInfoDiv.className = "userInfoDiv";
  });
  //слушатель submit формы редактирования данных пользователя
  editUserForm.addEventListener("submit", async (event3) => {
    event3.preventDefault();
    const data = new FormData(editUserForm);
    // console.log(data);
    const response = await fetch("/profile/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    //!
    console.log("response", response);
    const result = await response.json();
    //!
    console.log(result);

    if (result.msg === "success") {
      fullNameDiv.childNodes[0].innerText = result.firstName + " ";
      fullNameDiv.childNodes[1].innerText = result.middleName + " ";
      fullNameDiv.childNodes[2].innerText = result.lastName;

      userInfoDiv.childNodes[1].innerText = "Телефон: " + result.phone;
      userInfoDiv.childNodes[2].innerText = "email: " + result.email;

      editUserForm.remove();
      userInfoDiv.className = "userInfoDiv";
    }
  });
});

//слушатель кнопки "изменить пароль"
editPassBtn.addEventListener("click", (event4) => {
  event4.preventDefault();
  const checkPassFormHtml = `
    <form name="checkPassForm">
        <input type="password" name="passInput" placeholder="Введите старый пароль" />
        <button class="checkOldPassBtn">Применить</button>
        <button class="cancelPassCheckBtn">Отмена</button>
    </form>
  `;
  editPassDiv.insertAdjacentHTML("beforeend", checkPassFormHtml);
  editPassBtn.disabled = true;

  const checkPassForm = document.getElementsByName("checkPassForm")[0];
  const cancelPassCheckBtn = document.querySelector(".cancelPassCheckBtn");

  //слушатель кнопки "отмена" редактирования пароля
  cancelPassCheckBtn.addEventListener("click", (event5) => {
    event5.preventDefault();
    checkPassForm.remove();
    editPassBtn.disabled = false;
  });

  //слушатель submit формы проверки старого пароля
  checkPassForm.addEventListener("submit", async (event6) => {
    event6.preventDefault();
    const oldPass = checkPassForm.passInput.value;

    const response = await fetch("/profile/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPass }),
    });

    const result = await response.json();
    const msg = document.querySelector(".passMsg");
    msg.innerText = result.msg;

    if (result.msg === "Введите новый пароль") {
      checkPassForm.passInput.value = "";
      checkPassForm.passInput.placeholder = "Введите новый пароль";

      //изменение пароля на новый
      checkPassForm.addEventListener("submit", async (event7) => {
        event7.preventDefault();
        const newPass = checkPassForm.passInput.value;
        const response1 = await fetch("/profile/password", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPass }),
        });

        const result1 = await response1.json();

        msg.innerText = result1.msg;
        if (result1.msg === "Пароль изменён") {
          checkPassForm.remove();
          editPassBtn.disabled = false;
        }
        setTimeout(() => {
          msg.innerText = "";
        }, 2000);
      });
    }
    // msg.innerText = result.msg;
    // if (result.msg === "Введите новый пароль") {
    //   passInput.placeholder = "Введите новый пароль";
    //   passInput.value = "";
    //   passCheckBtn.className = "newPassBtn";
    // }
  });
});
