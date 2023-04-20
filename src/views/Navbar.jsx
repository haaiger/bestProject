const React = require('react');

module.exports = function Navbar({ userSession }) {
  return (
    <nav>
      <div className="anavbar-nav">
        <div className="container-nav-link">
          <a className="navLink" href="/">
            Главная
          </a>
          <a className="navLink" href="/products/new">
            Добавить новый элемент
          </a>
          <a className="navLink" href="/products/">
            Все элементы
          </a>
          <a className="navLink" href="/cart">
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

// const React = require('react');

// module.exports = function Navbar({ userSession }) {
//   console.log(userSession, '<<<<<USER IN NAVBAR');
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         <a className="navbar-brand btn btn-primary" href="/">
//           Главная
//         </a>
//         <a className="navbar-brand btn btn-primary" href="/products/new">
//           Добавить новый элемент
//         </a>
//         <a className="navbar-brand btn btn-primary" href="/products/">
//           Все элементы
//         </a>
//         <a className="navbar-brand btn btn-primary" href="/cart">
//           Избранное
//         </a>
//         {userSession.userId ? (
//           <div className="newUserMenu">
//             <button
//               type="button"
//               className="profile button"
//               style={{ display: 'inline' }}
//             >
//               Личный кабинет
//             </button>

//             <button
//               type="button"
//               className="logout button"
//               style={{ display: 'inline' }}
//             >
//               Выход
//             </button>
//           </div>
//         ) : (
//           <div className="logReg">
//             <button
//               type="button"
//               className="login button"
//               style={{ display: 'inline' }}
//             >
//               Авторизоваться
//             </button>
//             <button
//               type="button"
//               className="registration button"
//               style={{ display: 'inline' }}
//             >
//               Зарегистрироваться
//             </button>
//           </div>
//         )}

//         {/* ниже кнопки не удалять, нужно для корректной отработки логики */}
//         <div className="logReg">
//           <button type="button" className="profile button">
//             Личный кабинет
//           </button>
//           <button type="button" className="login button">
//             Авторизоваться
//           </button>
//           <button type="button" className="registration button">
//             Зарегистрироваться
//           </button>
//           <button type="button" className="logout button">
//             Выход
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };
