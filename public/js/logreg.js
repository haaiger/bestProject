const findButtonForReg = document.querySelector(".registration");
const registrationFormContainer = document.querySelector(
  ".registration-form-container",
);
let counterForReg = 0;

findButtonForReg.addEventListener("click", () => {
  counterForReg += 1;
  if (counterForReg % 2) {
    const buttonText = document.querySelector(".registration").textContent;
    if (buttonText === "Зарегистрироваться") {
      document.querySelector(".registration").textContent = "Скрыть форму";
    }

    const buttonLogin = document.querySelector(".login");
    buttonLogin.style.display = "none";

    const registrationForm = document.createElement("div");
    registrationForm.classList.add("registration-form");

    registrationForm.innerHTML = `<form class="p-4 border rounded shadow-sm full-registration-form regForm" name="fullregistrationForm">
    <h1 class="h4 mb-4">Регистрация</h1>
    <div class="row">


        <div class="col-md-4">
        <h5 class="form-label">ФИО</h5>
            <div class="mb-3">
                <label class="form-label">Имя</label>
                <input type="text" class="form-control" name="firstName" required />
            </div>
        </div>
        <div class="col-md-4">
        <h5 class="form-label">Контактные данные</h5>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" name="email" required />
            </div>
        </div>
        <div class="col-md-4">
        <h5 class="form-label">Безопасность</h5>
            <div class="mb-3">
                <label class="form-label">Пароль</label>
                <input type="password" class="form-control" name="password" id="password1" required />
            </div>
        </div>
    </div>
    <div class="row">
    
        <div class="col-md-4">
            <div class="mb-3">
                <label class="form-label">Отчество</label>
                <input type="text" class="form-control" name="middleName" required />
            </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3">
                <label class="form-label">Телефон</label>
                <input type="tel" class="form-control" name="phone" required />
            </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3">
                <label class="form-label">Подтвердите пароль</label>
                <input type="password" class="form-control" id="password2" required />
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="mb-3">
                <label class="form-label">Фамилия</label>
                <input type="text" class="form-control" name="lastName" required />
            </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
    </div>
    <h5 class="msg1"></h5>
    <div class="d-grid gap-2">
        <button type="submit" class="btn btn-success my-2">Зарегистрироваться</button>
    </div>
</form>
  `;
    registrationFormContainer.style.display = "inline";
    registrationFormContainer.appendChild(registrationForm);

    const regForm1 = document.forms.fullregistrationForm;
    regForm1.addEventListener("submit", async (e) => {
      e.preventDefault();
      const password1Input = regForm1.querySelector("#password1");
      const password2Input = regForm1.querySelector("#password2");
      const password1 = password1Input.value;
      const password2 = password2Input.value;
      if (password1 !== password2) {
        const msg = document.querySelector(".msg1");
        msg.style.display = "inline";
        msg.innerText = "Пароли не совпадают";
      } else {
        const data = new FormData(regForm1);
        const body = JSON.stringify(Object.fromEntries(data));

        try {
          const response = await fetch("/users/registration", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(data)),
          });
          const result = await response.json();
          const msg1 = document.querySelector(".msg1");
          if (result.msg) {
            msg1.style.visibility = "visible";
            msg1.innerText = `${result.msg}`;
          } else {
            document.querySelector(".regForm").remove();
            registrationFormContainer.style.display = "none";
            const buttonProfile = document.querySelector(".profile");
            buttonProfile.style.display = "inline";
            const buttonLogoute = document.querySelector(".logout");
            buttonLogoute.style.display = "inline";
            const buttonRegistration = document.querySelector(".registration");
            buttonRegistration.style.display = "none";
            const buttonLogin = document.querySelector(".login");
            buttonLogin.style.display = "none";

            const profileButton = document.querySelector(".profile");
            profileButton.addEventListener("click", () => {
              window.location = "/profile";
            });
          }
        } catch (error) {
          // alert('ОШИБКА!!, ЗАПИСЬ НЕ СОЗДАЛАСЬ', error);
        }
      }
    });
  } else {
    const buttonText = document.querySelector(".registration").textContent;
    if (buttonText === "Скрыть форму") {
      document.querySelector(".registration").textContent = "Зарегистрироваться";
      document.querySelector(".regForm").remove();
      registrationFormContainer.style.display = "none";
      const buttonLogin = document.querySelector(".login");
      buttonLogin.style.display = "inline";
    }
  }
});

const LoginFormContainer = document.querySelector(".login-form-container");
let counterForLogin = 0;

const findButtonForLogin = document.querySelector(".login");
findButtonForLogin.addEventListener("click", () => {
  counterForLogin += 1;
  if (counterForLogin % 2) {
    const buttonText = document.querySelector(".login").textContent;
    if (buttonText === "Авторизоваться") {
      document.querySelector(".login").textContent = "Скрыть форму";
    }
    const buttomRegistration = document.querySelector(".registration");
    buttomRegistration.style.display = "none";

    const loginForm = document.createElement("div");
    loginForm.classList.add("login-form");

    loginForm.innerHTML = `
    <form class='logForm' name="logForm">

    <label for="email">Введите почту:</label>
    <input type="email" name="email" id="email">

    <label for="password">Введите пароль:</label>
    <input type="password" name="password" id="password1">
    <h5 class="msg"></h5>

    <button class="btn btn-success my-3" style='width: 100%' type='submit'>Авторизоваться</button>

    </form>
  `;
    LoginFormContainer.style.display = "inline";
    LoginFormContainer.appendChild(loginForm);

    const LoginForm1 = document.forms.logForm;
    LoginForm1.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(LoginForm1);
      try {
        const response = await fetch("/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(data)),
        });
        const result = await response.json();
        const msg = document.querySelector(".msg");
        console.log(result, "resultresult");
        if (result.firstName) {
          document.querySelector(".logForm").remove();
          LoginFormContainer.style.display = "none";
          const buttonProfile = document.querySelector(".profile");
          buttonProfile.style.display = "inline";
          const buttonLogoute = document.querySelector(".logout");
          buttonLogoute.style.display = "inline";
          const buttonLogin = document.querySelector(".login");
          buttonLogin.style.display = "none";

          msg.innerText = "";

          const profileButton = document.querySelector(".profile");
          profileButton.addEventListener("click", () => {
            window.location = "/profile";
          });
        } else {
          msg.style.display = "block";
          msg.innerText = `${result.msg}`;
        }
      } catch (error) {
        // alert('ОШИБКА ВЫ НЕ СМОГЛИ ВОЙТИ', error);
      }
    });
  } else {
    const buttonText = document.querySelector(".login").textContent;
    if (buttonText === "Скрыть форму") {
      document.querySelector(".login").textContent = "Авторизоваться";
      document.querySelector(".logForm").remove();
      LoginFormContainer.style.display = "none";
      const buttonRegistration = document.querySelector(".registration");
      buttonRegistration.style.display = "inline";
    }
  }
});

const buttonLogout = document.querySelector(".logout");
buttonLogout.addEventListener("click", () => {
  const confirmBox = document.createElement("div");
  confirmBox.className = "confirm-box";

  const message = document.createElement("div");
  message.className = "message";
  message.textContent = "Вы действительно хотите выйти из профиля?";

  const yesButton = document.createElement("button");
  yesButton.className = "yes-button";
  yesButton.textContent = "Да";

  const noButton = document.createElement("button");
  noButton.className = "no-button";
  noButton.textContent = "Нет";

  confirmBox.appendChild(message);
  confirmBox.appendChild(yesButton);
  confirmBox.appendChild(noButton);
  document.body.appendChild(confirmBox);

  yesButton.addEventListener("click", async () => {
    try {
      const response = await fetch("/users/logout");
      if (response.ok) {
        const buttonProfile = document.querySelector(".profile");
        buttonProfile.style.display = "none";
        const buttonLogoute = document.querySelector(".logout");
        buttonLogoute.style.display = "none";
        const buttonLogin = document.querySelector(".login");
        buttonLogin.style.display = "inline";
        buttonLogin.textContent = "Авторизоваться";
        const buttonRegistration = document.querySelector(".registration");
        buttonRegistration.style.display = "inline";
        buttonRegistration.textContent = "Зарегистрироваться";
        window.location = "/";
        confirmBox.remove();
      } else {
        alert("Ошибка");
      }
    } catch (error) {
      console.log(error);
    }
  });

  noButton.addEventListener("click", () => {
    confirmBox.remove();
  });
});

const profileButton = document.querySelector(".profile");

profileButton?.addEventListener("click", () => {
  window.location = "/profile";
});
