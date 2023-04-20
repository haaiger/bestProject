const React = require("react");

function Card({
  title, description, photo, id, userSession, numbersAd,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <script defer src="/js/card.js" />
      <img className="card-img-top" src={photo} alt={description} />
      <div className="card-body" id={id}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
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
  );
}

module.exports = Card;
