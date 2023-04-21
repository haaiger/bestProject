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
  description,
}) {
  const isFavorite = numbersAd ? numbersAd.includes(id) : false;
  const photos = JSON.parse(photo);

  return (
    <div
      className="card card-one wrapperCard"
      id={id}
      style={{ width: "18rem" }}
    >
      <link rel="stylesheet" href="/style/card.css" />
      <div className="container-carousel">
        {photos && photos.length > 0 ? (
          <div className="carousel-mini">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.replace("public", "")}
                className={index === 0 ? "active" : ""}
                alt={`House photo ${index}`}
              />
            ))}
          </div>
        ) : (
          <img src="\img\no_photo.jpg" className="img-empty" />
        )}
      </div>
      <div className="card-body">
        <a href={`/full-card/${id}`}>
          <h5 className="card-typeHouse">{typeHouse}</h5>
          <h5 className="card-rentPeriod">{rentPeriod}</h5>
          <p className="card-price">
            {price} {rentPeriod === "Посуточно" ? "руб/сут" : "руб/мес"}
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
