const React = require("react");

function Card({ id, photo, rentPeriod, typeHouse, region, price, address }) {
  function dayMonth(rentPeriod) {
    if (rentPeriod === "Посуточно") {
      return "руб/сут";
    }
    return "руб/мес";
  }

  return (
    <a href={`/full-card/card${id}`}>
      <div className="card card-one" id={id} style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={photo || "https://clck.ru/34BUog"}
          alt="One card"
        />
        <div className="card-body">
          <h5 className="card-typeHouse">{typeHouse}</h5>
          <h5 className="card-rentPeriod">{rentPeriod}</h5>
          <p className="card-price">
            {price} {dayMonth(rentPeriod)}
          </p>
          <p className="card-region">{region}</p>
          <p className="card-address">{address}</p>
        {numbersAd.includes(id) ? (
          <button
            id={`${id}`}
            type="button"
            className="btn btn-danger buttonRemoveFavorite"
            data-user-id={userSession.userId}
          >
            Убрать из избранного
          </button>
        ) : (
          <button
            id={`${id}`}
            type="button"
            className="btn btn-primary buttonHome buttonAddFavorite"
            data-user-id={userSession.userId}
          >
            Добавить в избранное
          </button>
        )}
        </div>
      </div>
    </a>
  );
}

module.exports = Card;
