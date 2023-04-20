const React = require("react");
const Layout = require("./Layout");

module.exports = function Favorites({ userSession, favoritesFromDB }) {
  console.log(favoritesFromDB, "favoritesFromDB");
  return (
    <Layout userSession={userSession}>
      <script defer src="/js/favorites+rent.js" />
      <div className="container mt-5">
        <h1 className="text-center mb-5">Избранное</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Фото</th>
              <th scope="col">Период аренды</th>
              <th scope="col">Тип жилья</th>
              <th scope="col">Регион</th>
              <th scope="col">Цена</th>
              <th scope="col">Адрес</th>
              <th scope="col">Географические координаты</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {favoritesFromDB.map((el) => (
              <tr id={el.id}>
                <td>
                  <img alt="Фото" />
                </td>
                <td>{el["House.rentPeriod"]}</td>
                <td>{el["House.typeHouse"]}</td>
                <td>{el["House.region"]}</td>
                <td>{el["House.price"]}</td>
                <td>{el["House.address"]}</td>
                <td>{el["House.geoTag"]}</td>
                <td>
                  <button className="btn btn-danger favorite-delete">
                    Удалить из избранного
                  </button>
                  <button className="btn btn-success rent">
                    Забронировать
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
