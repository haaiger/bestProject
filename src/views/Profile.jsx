/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
const React = require("react");
const Layout = require("./Layout");

module.exports = function Profile({
  userSession, user, favsFull, filters,
}) {
  return (
    <Layout userSession={userSession}>
      <div className="mainContainer" style={{ display: "flex" }}>
        <div className="operations">
          <h3 className="msg"></h3>
          {user?.isAdmin ? (
            <>
              <form
                name="newAdvert"
                style={{
                  border: "1px black solid",
                  margin: "5px",
                  padding: "5px",
                }}
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
                <button className="newAdBtn" type="button">apply</button>
              </form>
              <br />
              <form
                name="findAdvert"
                style={{
                  border: "1px black solid",
                  margin: "5px",
                  padding: "5px",
                }}
              >
                <label>
                  СВободно\занято
                  <select name="isRent">
                    <option value>Свободно</option>
                    <option value={false}>Занято</option>
                  </select>
                </label>
                <input type="number" name="id" placeholder="id" />
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
                  <select name="typeHouseName">
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
                  <select name="regionName">
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
                <input name="geotag" type="text" placeholder="Координаты" />
                <button className="searchAdBtn" type="button">apply</button>
              </form>
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
                  <button type="button">Удалить из избранного</button>
                  <button type="button">Забронировать</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="userInfo">
          <div>
            firstname:
            {' '}
            {user.firstName}
          </div>
          <div>
            middleName:
            {' '}
            {user.firstName}
          </div>
          <div>
            lastName:
            {' '}
            {user.lastName}
          </div>
          <div>
            phone:
            {' '}
            {user.phone}
          </div>
          <div>
            email:
            {' '}
            {user.email}
          </div>
          <button type="button">edit userInfo</button>
        </div>
      </div>
      <script defer src="/js/profile.js" />
    </Layout>
  );
};
