const { newCompany } = document.forms;
const wrapper = document.querySelector(".wrapperNewCompany");

newCompany.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData(newCompany);
    const data = Object.fromEntries(formData);
    console.log(data);
    const response = await fetch(`/new-company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    const blockInfo = document.createElement("div");
    blockInfo.innerText = responseData.message;
    wrapper.appendChild(blockInfo);
    if (responseData.message === "Компания была добавлена!") {
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  } catch (error) {
    console.log("Ошибка запроса fetch new-company", error);
  }
});
