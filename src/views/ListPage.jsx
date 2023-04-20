const React = require("react");
const BigCard = require("./components/BigCard");
const Layout = require("./Layout");

function ListPage({
  findHouses, userSession, rentPeriod, typeHouse, region,
}) {
 console.log(rentPeriod);
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/style/list.css" />
      <div className="wrapperList">
        <div>
          Примененные фильтры:
          {' '}
          {rentPeriod}
          ,
          {' '}
          {typeHouse}
          ,
          {' '}
          {region}
        </div>
        <div>
          <div>
            Количество найденных объявлений:
            {' '}
            {findHouses.length}
          </div>
          <button type="button">На карте</button>
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
