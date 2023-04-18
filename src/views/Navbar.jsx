const React = require("react");

module.exports = function Navbar({ userSession }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand btn btn-primary" href="/">
          Главная
        </a>
        <a className="navbar-brand btn btn-primary" href="/products/new">
          Добавить новый элемент
        </a>
        <a className="navbar-brand btn btn-primary" href="/products/">
          Все элементы
        </a>
        <a className="navbar-brand btn btn-primary" href="/cart">
          Избранное
        </a>

        <p className="text-danger h4">Привет {userSession}</p>
      </div>
    </nav>
  );
};
