const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

function HomePage({ userSession, HouseFromDB, numbersAd }) {
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/style/home.css" />
      <link rel="stylesheet" href="/style/cardCarousel.css" />

      <script defer src="/js/home.js" />
      <script defer src="/js/card.js" />
      <script defer src="/js/cardCarousel.js" />

      <div className="wrapperHome">
        <form className="formHome" name="formHome">
          <div className="wrapperFilters">
            <div className="wrapperFilter">
              <label>Тип аренды:</label>
              <select name="rentPeriod">
                <option>Посуточно</option>
                <option>Краткосрочно</option>
                <option>На длительный срок</option>
              </select>
            </div>
            <div className="wrapperFilter">
              <label>Тип жилья:</label>
              <select name="typeHouse">
                <option>Комната</option>
                <option>Квартира</option>
                <option>Дома</option>
              </select>
            </div>
            <div className="wrapperFilter">
              <label>Район:</label>
              <select name="region">
                <option>Первый район</option>
                <option>Второй район</option>
                <option>Пятый район</option>
              </select>
            </div>
          </div>
          <button type="submit">Поиск</button>
        </form>
        <button type="button">Показать на карте</button>
        <div className="wrapperRandomАdvertisement">
          {HouseFromDB.map((card, index) => (
            <Card
              numbersAd={numbersAd}
              userSession={userSession}
              id={card.id}
              key={index}
              photo={card.photo}
              typeHouse={card.typeHouse}
              rentPeriod={card.rentPeriod}
              region={card.region}
              price={card.price}
              address={card.address}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
