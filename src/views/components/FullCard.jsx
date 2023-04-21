const React = require("react");
const Layout = require("../Layout");

module.exports = function FullCard({
  userSession,
  oneHouseFronDB,
  numbersAd,
  id,
}) {
  const isFavorite = numbersAd.includes(Number(id));
  const photos = JSON.parse(oneHouseFronDB.photo);
  photos.map((photo) => console.log(photo));

  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/style/cardCarousel.css" />
      <script defer src="/js/cardCarousel.js" />
      <script defer src="/js/card.js" />

      <div className="container mt-5">
        <div className="row">
          <div className="container-carousel">
            <div className="carousel">
              {photos.map((photo, index) => (
                <img
                  src={photo.replace("public", "")}
                  className={index === 0 ? "active" : ""}
                />
              ))}
            </div>
            <div className="carousel-controls">
              <button className="prev-btn">Назад</button>
              <button className="next-btn">Вперед</button>
            </div>
          </div>

          <div className="col-md-12 pt-5">
            <h1 className="mb-4">{oneHouseFronDB.typeHouse}</h1>
            <p className="lead mb-4">{oneHouseFronDB.description}</p>
            <h3 className="mb-4">{oneHouseFronDB.rentPeriod}</h3>

            <h4 className="mb-4">Цена: {oneHouseFronDB.price}</h4>
            <h3 className="mb-4">{oneHouseFronDB.region}</h3>

            <p>{oneHouseFronDB.address}</p>

            {userSession.userId && (
              <button
                id={`${oneHouseFronDB.id}`}
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
      </div>
    </Layout>
  );
};
