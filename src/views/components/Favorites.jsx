const React = require("react");
const Card = require("./Card");

function Favorites({ houses, userSession, numbersAd }) {
  return (
    <div className="wrapperFavoriteАdvertisement">
      <link rel="stylesheet" href="/style/favorite.css" />
      {houses.map((house) => (
        <Card
          numbersAd={numbersAd}
          userSession={userSession}
          id={house.id}
          key={house.id}
          title={house.typeHouse}
          description={house.description}
          photo={house.photo}
        />
      ))}
    </div>
  );
}

module.exports = Favorites;
