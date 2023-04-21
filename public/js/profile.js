const { newAdvert, findAdvert } = document.forms;
const msg = document.querySelector(".msg");
const allAds = document.querySelector(".allAds");
const searchResultsDiv = document.querySelector(".searchResultsDiv");

// * Profile.jsx:27-28 (получение объекта с фильтрами через dataset)
const filters = JSON.parse(document.querySelector(".sendData").dataset.send);

console.log(filters);

//* создание нового объявления администратором
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

//* поиск объявления одминистратором
if (findAdvert) {
  findAdvert.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(findAdvert);
    const response = await fetch("/profile/search", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });

    const result = await response.json();
    console.log(result);
    if (result[0]) {
      if (searchResultsDiv.innerText) {
        searchResultsDiv.innerText = "";
      }
      result.map((item) => {
        const ad = `
        <div class="adInAdminSearchDiv" id=${
          item.id
        } style="margin: 5px; padding: 5px; border: 1px black solid">
              <div class="photoInAdminSearch">
                  <img src="/img/1.jpg" alt="фото из объявления" style="width: 300px" />
              </div>
                  <ul>
                      <li><span>id объявления: </span><span>${
                        item.id
                      }</span></li>
                      <li><span>Тип жилья: </span><span>${
                        item.typeHouse
                      }</span></li>
                      <li><span>Сдаётся: </span><span>${
                        item.rentPeriod
                      }</span></li>
                      <li><span>Адрес: </span><span>${
                        item.region
                      }, </span><span>${item.address}</span></li>
                      <li><span>Свободно(false)/занято(true): </span><span>${String(
                        item.isRent
                      )}</span></li>
                      <li><span>Цена: </span><span>${
                        item.price
                      }</span><span> рублей</span></li>
                      <li><span>Описание: </span><span>${
                        item.description
                      }</span></li>
                      <li><span>Координаты: </span><span>${
                        item.geoTag
                      }</span></li>
                      <li><span>Создано: </span><span>${item.createdAt.toString()}</span></li>
                      <li><span>Обновлено: </span><span>${item.updatedAt.toString()}</span></li>
                  </ul>
              <button class="editAdBtn">Изменить</button>
              <button class="delAdBtn">Удалить</button>
          </div>
                `;
        searchResultsDiv.insertAdjacentHTML("beforeend", ad);
      });
    } else {
      searchResultsDiv.innerText = result.msg;
    }
  });
}

//* слушатель кнопки "показать все" объявления (для админа)
if (allAds) {
  allAds.addEventListener("click", async (event) => {
    event.preventDefault();
    const response = await fetch("/profile/searchAll", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    const result = await response.json();
    console.log(result);
    if (!result.msg) {
      if (searchResultsDiv.innerText) {
        searchResultsDiv.innerText = "";
      }
      result.map((item) => {
        const ad = `
                <div class="adInAdminSearchDiv" id=${
                  item.id
                } style="margin: 5px; padding: 5px; border: 1px black solid">
                    <div class="photoInAdminSearch">
                        <img src="/img/1.jpg" alt="фото из объявления" style="width: 300px" />
                    </div>
                        <ul>
                            <li><span>id объявления: </span><span>${
                              item.id
                            }</span></li>
                            <li><span>Тип жилья: </span><span>${
                              item.typeHouse
                            }</span></li>
                            <li><span>Сдаётся: </span><span>${
                              item.rentPeriod
                            }</span></li>
                            <li><span>Адрес: </span><span>${
                              item.region
                            }, </span><span>${item.address}</span></li>
                            <li><span>Свободно(false)/занято(true): </span><span>${String(
                              item.isRent
                            )}</span></li>
                            <li><span>Цена: </span><span>${
                              item.price
                            }</span><span> рублей</span></li>
                            <li><span>Описание: </span><span>${
                              item.description
                            }</span></li>
                            <li><span>Координаты: </span><span>${
                              item.geoTag
                            }</span></li>
                            <li><span>Создано: </span><span>${item.createdAt.toString()}</span></li>
                            <li><span>Обновлено: </span><span>${item.updatedAt.toString()}</span></li>
                        </ul>
                    <button class="editAdBtn">Изменить</button>
                    <button class="delAdBtn">Удалить</button>
                </div>
            `;
        searchResultsDiv.insertAdjacentHTML("beforeend", ad);
      });
    }
  });
}

//* слушатели кнопок "удалить" и "изменить" для объявлений из результатов поиска
searchResultsDiv.addEventListener("click", async (event) => {
  event.preventDefault();
 //* кнопка "изменить"
  if (event.target.className === "editAdBtn") {
    const thisAdDiv = event.target.parentNode;
    const editAdBtn = thisAdDiv.querySelector(".editAdBtn");
    editAdBtn.disabled = true;
    const ul = event.target.parentNode.childNodes[3];
    const thisAdId = Number(thisAdDiv.id);
    // console.log(thisAdDiv);
    // console.log(ul.children);
    const thisAdTypeHouse = ul.children[1].children[1].innerText;
    const thisAdRentPeriod = ul.children[2].children[1].innerText;
    const thisAdRegion = ul.children[3].children[1].innerText.slice(0, -2);
    const thisAdAddress = ul.children[3].children[2].innerText;
    const thisAdPrice = ul.children[5].children[1].innerHTML;
    const thisAdDescription = ul.children[6].children[1].textContent;
    const thisAdGeoTag = ul.children[7].children[1].innerHTML;
    const editAdFormHtml = `
        <form name="editAdForm" style="display: flex; flex-direction: column">
            <input name="typeHouse" type="text" value="${thisAdTypeHouse}" />
            <span>(Варианты: ${filters.typesOfHouses.join(", ")})</span>
            <input name="rentPeriod" type="text" value="${thisAdRentPeriod}" />
            <span>(Варианты: ${filters.rentPeriods.join(", ")})</span>
            <input name="region" type="text" value="${thisAdRegion}" />
            <span>(Варианты: ${filters.regions.join(", ")})</span>
            <input name="address" type="text" value="${thisAdAddress}" />
            <span></span>
            <input name="price" type="number" value="${thisAdPrice}" />
            <span>(только цифры)</span>
            <input name="description" type="text" value="${thisAdDescription}" />
            <input name="geoTag" type="text" value="${thisAdGeoTag}" />
            <span>(только цифры)</span>
            <select name="isRent">
                <option value="true">true</option>
                <option value="false" selected>false</option>
            </select>
            <span>(свободно: false / занято: true)</span>
            <button class="saveAdEditBtn">Сохранить</button>
            <button class="cancelAdEditBtn">Отмена</button>
        </form>
    `;
    // console.log(editAdFormHtml);
    thisAdDiv.insertAdjacentHTML("beforeend", editAdFormHtml);
    const editAdForm = document.getElementsByName("editAdForm")[0];

    //* слушатель кнопок "отмена" изменения объявления и "сохранить"
    editAdForm.addEventListener("click", async (e) => {
      e.preventDefault();
      // * "отмена"
      if (e.target.className === "cancelAdEditBtn") {
        editAdBtn.disabled = false;
        e.target.parentNode.remove();
      }
      // * "сохранить"
      if (e.target.className === "saveAdEditBtn") {
        const data = new FormData(editAdForm);
        const response = await fetch(`/profile/${thisAdId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(data)),
        });
        const result = await response.json();
        console.log(result);

        if (result.msg === "success") {
          ul.children[1].children[1].innerText = result.typeHouse;
          ul.children[2].children[1].innerText = result.rentPeriod;
          ul.children[3].children[1].innerText = result.region;
          ul.children[3].children[2].innerText = result.address;
          ul.children[5].children[1].innerText = result.price;
          ul.children[6].children[1].innerText = result.description;
          ul.children[7].children[1].innerText = result.geoTag;
          editAdBtn.disabled = false;
          editAdForm.remove();
        }
      }
    });
  }
  //* кнопка "удалить"
  if (event.target.className === "delAdBtn") {
    const adId = Number(event.target.parentNode.id);
    const response = await fetch(`/profile/${adId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    const result = await response.json();
    console.log(result);

    if (result.msg.includes("Объявление")) {
      event.target.parentNode.remove();
    }
  }
});
/