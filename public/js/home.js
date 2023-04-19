const { formHome } = document.forms;
console.log(formHome);

formHome.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(123);
  const loginData = new FormData(formHome);
  console.log(loginData);
  const data = Object.fromEntries(loginData);
  console.log(data);
});
