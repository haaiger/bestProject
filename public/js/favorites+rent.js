const findButtonRent = document.querySelector(".rent");
findButtonRent?.addEventListener("click", () => {
  const rentDates = prompt(
    "Введите желаемые даты (месяца) аренды, если они известны (например, 01.05.2023 - 10.05.2023):"
  );
});
const findButtonRentEdit = document.querySelector(".rent-edit");
findButtonRentEdit?.addEventListener("click", (event) => {
  const rentDatesElement = document.querySelector(".rent-date");
  rentDatesElement.innerHTML = `<input type="text" value="${rentDatesElement.innerText}" />`;
});
