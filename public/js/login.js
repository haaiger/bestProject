const { loginForm } = document.forms;
const wrapper = document.querySelector(".wrapperLogin");

loginForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const loginData = new FormData(loginForm);
    const data = Object.fromEntries(loginData);
    const response = await fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    const blockInfo = document.createElement("div");
    blockInfo.className = "info";
    blockInfo.innerText = responseData.message;
    const findInfo = document.querySelector(".info");
    if (!findInfo) {
      wrapper.appendChild(blockInfo);
    }
    if (responseData.message === "Вы успешно зашли!") {
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  } catch (error) {
    console.log("Ошибка fetch запроса регистрации", error);
  }
});
