const React = require("react");
const Card = require("./Card");

function Favorites({ houses, userSession, numbersAd }) {
  return (
    <div className="wrapperFavoriteАdvertisement">
      <link rel="stylesheet" href="/style/favorite.css" />
      {houses.map((card) => (
        <Card
          numbersAd={numbersAd}
          userSession={userSession}
          id={card.id}
          key={card.id}
          // photo={card.photo}
          typeHouse={card.typeHouse}
          rentPeriod={card.rentPeriod}
          region={card.region}
          price={card.price}
          address={card.address}
        />
      ))}
    </div>
  );
}

module.exports = Favorites;
