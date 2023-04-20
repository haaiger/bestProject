const { newAdvert, findAdvert } = document.forms;
const msg = document.querySelector(".msg");

if (newAdvert) {
  newAdvert.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = new FormData(newAdvert);
    const response = await fetch("/profile/add", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });

    const result = await response.json();
    msg.innerText = result.msg;

    if (result.msg === "SUCCESS") {
      newAdvert.querySelectorAll("input").forEach((el) => (el.value = ""));
    }
  });
}
