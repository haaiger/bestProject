const React = require("react");

function Card({
  id,
  photo,
  rentPeriod,
  typeHouse,
  region,
  price,
  address,
  userSession,
  numbersAd,
}) {
  const isFavorite = numbersAd ? numbersAd.includes(id) : false;

  return (
    <div className="card card-one" id={id} style={{ width: "18rem" }}>
      <script defer src="/js/card.js" />
      <img
        className="card-img-top"
        src={photo || "https://clck.ru/34BUog"}
        alt="One card"
      />
      <div className="card-body">
        <a href={`/full-card/${id}`}>
          <h5 className="card-typeHouse">{typeHouse}</h5>
          <h5 className="card-rentPeriod">{rentPeriod}</h5>
          <p className="card-price">
            {price}
            {' '}
            {rentPeriod === "Посуточно" ? "руб/сут" : "руб/мес"}
          </p>
          <p className="card-region">{region}</p>
          <p className="card-address">{address}</p>
        </a>
        {userSession.userId && (
          <button
            id={`${id}`}
            data-user-id={userSession.userId}
            type="button"
            className={`btn ${
              isFavorite
                ? "btn-danger buttonRemoveFavorite"
                : "btn-primary buttonHome buttonAddFavorite"
            }`}
          >
            {isFavorite ? "Убрать из избранного" : "Добавить в избранное"}
          </button>
        )}
      </div>
    </div>
  );
}

module.exports = Card;
