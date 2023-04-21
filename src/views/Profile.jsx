/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout = require('./Layout');

const style = '/style/profile.css';

module.exports = function Profile({ userSession, user, favsFull, filters }) {
  // console.log("userSession========>", userSession);
  // console.log("user========>", user);
  // console.log("userFavs========>", favsFull);
  // console.log("filters========>", filters);
  return (
    <Layout userSession={userSession} style={style}>
      <div className="mainContainer" style={{ display: 'flex' }}>
        <div className="operations">
          <h3 className="msg"></h3>
          {user?.isAdmin ? (
            <>
              <div className="adminMail">
                <a href="/admin/mail" className="btn-admin-mail">
                  Почта
                </a>
              </div>
              <form
                name="newAdvert"
                style={{
                  border: '1px black solid',
                  margin: '5px',
                  padding: '5px',
                }}
                className="sendData"
                data-send={JSON.stringify(filters)}
              >
                <label>
                  rentPeriod
                  <select name="rentPeriod">
                    <option disabled selected>
                      Выберите
                    </option>
                    {filters.rentPeriods.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  typeHouse
                  <select name="typeHouse">
                    <option disabled selected>
                      Выберите
                    </option>
                    {filters.typesOfHouses.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  regions
                  <select name="region">
                    <option disabled selected>
                      Выберите
                    </option>
                    {filters.regions.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <input name="price" type="number" placeholder="Цена" />
                <input name="description" type="text" placeholder="Описание" />
                {/* <input name="photo" type="file" placeholder="Фото" /> */}
                <input name="address" type="text" placeholder="Адрес" />
                <input name="geoTag" type="text" placeholder="Координаты" />
                <button className="newAdBtn">apply</button>
              </form>
              <br />
              <form
                name="findAdvert"
                style={{
                  border: '1px black solid',
                  margin: '5px',
                  padding: '5px',
                }}
              >
                <input type="number" name="id" placeholder="id" />
                <label>
                  СВободно\занято
                  <select name="isRent">
                    <option disabled selected>
                      Выберите
                    </option>
                    <option value={true}>Занято</option>
                    <option value={false}>Свободно</option>
                  </select>
                </label>
                <label>
                  rentPeriods
                  <select name="rentPeriod">
                    <option disabled selected>
                      Выберите
                    </option>
                    {filters.rentPeriods.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  typesOfHouses
                  <select name="typeHouse">
                    <option disabled selected>
                      Выберите
                    </option>
                    {filters.typesOfHouses.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <label>
                  regions
                  <select name="region">
                    <option disabled selected>
                      Выберите
                    </option>
                    {filters.regions.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </label>
                <input name="price" type="number" placeholder="Цена" />
                <input name="address" type="text" placeholder="Адрес" />
                {/* <input name="geotag" type="text" placeholder="Координаты" /> */}
                <button className="searchAdBtn">apply</button>
              </form>
              <button className="allAds">Показать все</button>
              <div className="searchResultsDiv"></div>
            </>
          ) : (
            <ul>
              {favsFull.map((item) => (
                <li>
                  <ul>
                    <li>{item.rentPeriod}</li>
                    <li>{item.typeHouse}</li>
                    <li>{item.region}</li>
                    <li>{item.price}</li>
                    <li>{item.address}</li>
                    <li>{item.description}</li>
                  </ul>
                  <button>Удалить из избранного</button>
                  <button>Забронировать</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="userInfoDiv">
          <div className="fullNameDiv">
            <span>{user.firstName} </span>
            <span>{user.middleName} </span>
            <span>{user.lastName}</span>
          </div>
          <div>Телефон: {user.phone}</div>
          <div>email: {user.email}</div>
          <button className="editUserBtn">edit userInfo</button>
          <div class="editPassDiv">
            <button className="editPassBtn">Изменить пароль</button>
          </div>
          <h4 className="passMsg"></h4>
        </div>
      </div>
      <script defer src="/js/profile.js" />
      <script defer src="/js/editUser.js" />
    </Layout>
  );
};
