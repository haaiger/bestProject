const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <nav>
      <div className="anavbar-nav">
        <div className="container-nav-link">
          <a className="navLink" href="/">
            Главная
          </a>
          <a className="navLink" href="/profile/favorites">
            Избранное
          </a>
        </div>
        {userSession.userId ? (
          <div className="newUserMenu">
            <button
              type="button"
              className="profile button"
              style={{ display: 'inline' }}
            >
              Личный кабинет
            </button>

            <button
              type="button"
              className="logout button"
              style={{ display: 'inline' }}
            >
              Выход
            </button>
          </div>
        ) : (
          <div className="logReg">
            <button
              type="button"
              className="login button"
              style={{ display: 'inline' }}
            >
              Авторизоваться
            </button>
            <button
              type="button"
              className="registration button"
              style={{ display: 'inline' }}
            >
              Зарегистрироваться
            </button>
          </div>
        )}

        {/* ниже кнопки не удалять, нужно для корректной отработки логики */}
        <div className="logReg">
          <button type="button" className="profile button">
            Личный кабинет
          </button>
          <button type="button" className="login button">
            Авторизоваться
          </button>
          <button type="button" className="registration button">
            Зарегистрироваться
          </button>
          <button type="button" className="logout button">
            Выход
          </button>
        </div>
      </div>
    </nav>
  );
};
