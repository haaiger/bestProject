const editButtons = document.querySelectorAll(".editButton");
const deleteButtons = document.querySelectorAll(".deleteButton");
const wrapper = document.querySelector(".wrapperHome");
const addButtons = document.querySelectorAll(".addButton");

editButtons?.forEach((editButton) => {
  editButton.addEventListener("click", (event) => {
    event.preventDefault();
    const editBlock = `
        <form name="editForm" class="editForm">
            <div>
                <label>Компания: </label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Номер: </label>
                <input type="text" name="phoneNumber" />
            </div>
            <button type="submit" class="saveButton">Сохранить</button>
        </form>
      `;
    const wrapperEdit = document.createElement("div");
    wrapperEdit.className = "wrapperEdit";
    wrapperEdit.innerHTML = editBlock;
    wrapper.appendChild(wrapperEdit);

    const { editForm } = document.forms;
    editForm?.addEventListener("submit", async (insideEvent) => {
      insideEvent.preventDefault();
      const { companyId } = editButton.dataset;
      const editData = new FormData(editForm);
      const data = Object.fromEntries(editData);
      const response = await fetch(`/${companyId}/change`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          method: "PUT",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        window.location.reload();
      } else {
        const error = await response.json();
        alert(error.message);
      }
    });
  });
});

deleteButtons?.forEach((deleteButton) => {
  deleteButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const confirmation = confirm(
      "Вы уверены, что хотите удалить эту компанию?",
    );
    if (confirmation) {
      const { companyId } = event.target.dataset;
      const response = await fetch(`/companies/${companyId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        window.location.reload();
      } else {
        console.error("Ошибка удаления компании!");
      }
    }
  });
});

addButtons?.forEach((addButton) => {
  addButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const { companyId } = event.target.dataset;
    const response = await fetch("/my-numbers/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyId }),
    });
    const result = await response.json();
    console.log(result.message);
  });
});
