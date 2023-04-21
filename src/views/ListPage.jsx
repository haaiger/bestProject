const React = require("react");
const BigCard = require("./components/BigCard");
const Layout = require("./Layout");

function ListPage({ findHouses, userSession }) {
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/style/list.css" />
      <div className="wrapperList">
        <div>Тут будет показывать фильтр, который применен</div>
        <div>
          <div>Количество найденных объявлений</div>
          <div>Фильтр для сортировки</div>
        </div>
        <div className="wrapperListBigCard">
          {findHouses.map((house) => (
            <BigCard
              photo={house.photo}
              rooms={house.rooms}
              address={house.address}
              price={house.price}
              typeHouse={house.typeHouse}
              rentPeriod={house.rentPeriod}
              region={house.region}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = ListPage;
