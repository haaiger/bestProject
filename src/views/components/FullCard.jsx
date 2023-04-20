const React = require("react");
const Layout = require("../Layout");

module.exports = function FullCard({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <div className="container mt-5" style={{ height: 1500 }}>
        <div className="row">
          <div className="col-md-12">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/1.jpg"
                    className="d-block mx-auto w-75"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/2.jpg"
                    className="d-block mx-auto w-75"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/3.jpg"
                    className="d-block mx-auto w-75"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-12 pt-5">
            <h1 className="mb-4">Дом</h1>
            <p className="lead mb-4">
              Это Дом с 8 комнат(ой/ами), расположена в(-о) Третий район.
            </p>
            <h3 className="mb-4">Посуточно</h3>
            <h4 className="mb-4">8 комнат</h4>

            <h4 className="mb-4">Цена: 3 493 530 руб.</h4>
            <h3 className="mb-4">Третий район</h3>

            <p>Адрес: Ленина 65</p>
            <button type="button" className="btn btn-primary mt-4">
              Добавить в избранное
            </button>
            <button type="button" className="btn btn-primary mt-4">
              Забронировать
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};