const React = require("react");
const Layout = require("./Layout");
const Card = require("./components/Card");

const someCards = [
  {
    link: null,
    title: "title1",
    text: "text1",
    id: 1,
  },
  {
    link: null,
    title: "title2",
    text: "text2",
    id: 2,
  },
  {
    link: null,
    title: "title3",
    text: "text3",
    id: 3,
  },
];

function HomePage({ userSession, HouseFromDB, numbersAd}) {
  console.log(userSession, "<<<<<<<<<HOPME PAGE");
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/style/home.css" />
      <script defer src="/js/home.js" />
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
              <select name="regions">
                <option>Центральный</option>
                <option>Ленинский</option>
                <option>Октябрьский</option>
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
              // photo={card.photo}
              id={card.id}
              typeHouse={card.typeHouse}
              rentPeriod={card.rentPeriod}
              region={card.region}
              price={card.price}
              address={card.address}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = HomePage;
