const { registrationForm } = document.forms;
const wrapper = document.querySelector(".wrapperRegistration");

registrationForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const registrationData = new FormData(registrationForm);
    const data = Object.fromEntries(registrationData);
    const response = await fetch(`/registration`, {
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
    if (responseData.message === "Вы успешно зарегистрировались!") {
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
  } catch (error) {
    console.log("Ошибка fetch запроса регистрации", error);
  }
});
