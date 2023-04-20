const React = require("react");
const Layout = require("../Layout");

module.exports = function House({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <div>
        <h1 className="text-center">Карточка крватиры</h1>
        <ul className="house list-unstyled">
          <div className="buttons-house">
            <button className="btn btn-success add-to-cart mr-2" id="1">
              Добавить в избранное
            </button>
            <button className="btn btn-success add-to-order mr-2" id="1">
              Арендовать
            </button>
          </div>
        </ul>
      </div>
    </Layout>
  );
};
