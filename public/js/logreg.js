const findButtonForReg = document.querySelector(".registration");
const registrationFormContainer = document.querySelector(
  ".registration-form-container"
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

    registrationForm.innerHTML = `
    <form class='regForm' name="regForm">
    <label for="name">Введите ваше имя:</label>
    <input type="text" name="firstName" id="name">

    <label for="email">Введите почту:</label>
    <input type="email" name="email" id="email">

    <label for="password">Введите пароль:</label>
    <input type="password" name="password" id="password1">

    <label for="password">Повторите пароль:</label>
    <input type="password" name="password" id="password2">

    <h5 class="msg"></h5>

    <button type='submit'>Быстрая регистрация</button>
    <a class="btn btn-primary d-grid" href="/full-page-registration">
    Пройти полную регистрацию
  </a>



    </form>
  `;
    registrationFormContainer.style.display = "inline";
    registrationFormContainer.appendChild(registrationForm);

    const regForm1 = document.forms.regForm;
    regForm1.addEventListener("submit", async (e) => {
      e.preventDefault();
      const password1Input = regForm1.querySelector("#password1");
      const password2Input = regForm1.querySelector("#password2");
      const password1 = password1Input.value;
      const password2 = password2Input.value;
      if (password1 !== password2) {
        const msg = document.querySelector(".msg");
        msg.style.visibility = "visible";
        msg.innerText = "Пароли не совпадают";
      } else {
        e.preventDefault();
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
          const msg = document.querySelector(".msg");
          if (result.msg) {
            msg.style.visibility = "visible";
            msg.innerText = `${result.msg}`;
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
              location.assign(`/profile/${result.user.id}`);
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
      document.querySelector(".registration").textContent =
        "Зарегистрироваться";
      document.querySelector(".regForm").remove();
      registrationFormContainer.style.display = "none";
      const buttonLogin = document.querySelector(".login");
      buttonLogin.style.display = "inline";
    }
  }
});

const logoutButton = document.querySelector(".logout");
logoutButton?.addEventListener("click", async () => {
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
    } else {
      alert("Ошибка");
    }
  } catch (error) {
    console.log(error);
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

    <button type='submit'>Авторизоваться</button>

  </a>



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
          msg.style.visibility = "visible";
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
