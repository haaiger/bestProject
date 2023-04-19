const React = require("react");
const Cards = require("./components/Cards");

function ListPage({ foundHouses }) {
  return (
    <div className="wrapperList">
      <div>Тут будет показывать фильтр, который применен</div>
      <div>
        <div>Количество найденных объявлений</div>
        <div>Фильтр для сортировки</div>
        <button type="button">На карте</button>
      </div>
      {foundHouses.map((house) => (
        <Cards url={house.url} />
      ))}
    </div>
  );
}

module.exports = ListPage;
