const React = require("react");
const Layout = require("./Layout");

const { Category } = require("../../db/models");

module.exports = async function Profile({ userSession, user, userFavs }) {
  const categories = await Category.findAll();
  const rentPeriods = categories
    .map((item) => item.rentPeriod)
    .filter((item) => item);
  const typesOfHouses = categories
    .map((item) => item.typeHouse)
    .filter((item) => item);
  const regions = categories.map((item) => item.region).filter((item) => item);

  return (
    <Layout userSession={userSession}>
      <div className="mainContainer">
        <div className="operations">
          {userSession.isAdmin ? (
            <>
              {/* форма создания объявления */}
              <form name="newAdvert">
                <label>
                  rentPeriods
                  <input type="select" name="rentPeriod">
                    <option disabled>Выберите</option>
                    {rentPeriods.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </input>
                </label>
                <label>
                  typesOfHouses
                  <input type="select" name="typeHouseName">
                    <option disabled>Выберите</option>
                    {typesOfHouses.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </input>
                </label>
                <label>
                  regions
                  <input type="select" name="regionName">
                    <option disabled>Выберите</option>
                    {regions.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </input>
                </label>
                <input name="price" type="number" placeholder="Цена" />
                <input name="description" type="text" placeholder="Описание" />
                <input name="photos" type="file" placeholder="Фото" />
                <input name="address" type="text" placeholder="Адрес" />
                <input name="geotag" type="text" placeholder="Координаты" />
                <button>apply</button>
              </form>
              {/* форма поиска объявления */}
              <form name="findAdvert">
                <input type="number" name="isRent">
                  <option value={true}>Свободно</option>
                  <option value={false}>Занято</option>
                </input>
                <input type="select" name="id" placeholder="id" />
                <label>
                  rentPeriods
                  <input type="select" name="rentPeriod">
                    <option disabled>Выберите</option>
                    {rentPeriods.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </input>
                </label>
                <label>
                  typesOfHouses
                  <input type="select" name="typeHouseName">
                    <option disabled>Выберите</option>
                    {typesOfHouses.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </input>
                </label>
                <label>
                  regions
                  <input type="select" name="regionName">
                    <option disabled>Выберите</option>
                    {regions.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </input>
                </label>
                <input name="price" type="number" placeholder="Цена" />
                <input name="address" type="text" placeholder="Адрес" />
                <input name="geotag" type="text" placeholder="Координаты" />
                <button>apply</button>
              </form>
            </>
          ) : (
            <ul>
              {userFavs.map((item) => (
                <li>
                  <ul>
                    <li>{item.rentPeriod}</li>
                    <li>{item.typeHouse}</li>
                    <li>{item.region}</li>
                    <li>{item.price}</li>
                    <li>{item.address}</li>
                    <li>{item.desc}</li>
                  </ul>
                  <button>Удалить из избранного</button>
                  <button>Забронировать</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="userInfo">
          <div>firstname: {user.firstName}</div>
          <div>middleName: {user.firstName}</div>
          <div>lastName: {user.lastName}</div>
          <div>phone: {user.phone}</div>
          <div>email: {user.email}</div>
          <button>edit userInfo</button>
        </div>
      </div>
    </Layout>
  );
};
