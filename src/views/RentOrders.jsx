const React = require("react");
const Layout = require("./Layout");

module.exports = function RentOrders({ userSession, rentOrdersFromDB }) {
  return (
    <Layout userSession={userSession}>
      <script defer src="/js/favorites+rent.js" />
      <div className="container mt-5">
        <h1 className="text-center mb-5">Управление бронированием</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Фото</th>
              <th scope="col">Тип жилья</th>
              <th scope="col">Период аренды</th>
              <th scope="col">Даты</th>
              <th scope="col">Цена</th>
              <th scope="col">Адрес</th>
              <th scope="col">Географические координаты</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img alt="Фото" />
              </td>
              <td>Жильё 1</td>
              <td>Краткосрочно</td>
              <td className="rent-date">c 01.05 на три месяца</td>
              <td>1500</td>
              <td>ул Мира 5</td>
              <td>123123, 123123</td>
              <td>
                <button className="btn btn-danger rent-delete">
                  Отказаться от бронирования
                </button>
                <button className="btn btn-warning rent-edit">
                  Изменить даты
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
