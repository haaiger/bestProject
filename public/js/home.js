const { formHome } = document.forms;
const favouriteButton = document.querySelector(".buttonHome");

formHome?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const loginData = new FormData(formHome);
  const data = Object.fromEntries(loginData);
  console.log("data", data);
  try {
    window.location.href = `/list-cards/${data.rentPeriod}/${data.typeHouse}/${data.region}`;
  } catch (error) {
    console.log("Ошибка отправки формы home", error);
  }
});

favouriteButton?.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    const data = null; // получаем данные дома.
  } catch (error) {
    console.log("Ошибка fetch запроса добавления в избранное");
  }
});
