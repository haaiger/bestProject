const React = require('react');
const Navbar = require("./Navbar");

function Layout({ children, userSession, style, font }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/style/normalize.css" /> */}
        <link rel="stylesheet" href="/style/layout.css" />
        <title>Project</title>
      </head>
      <body>
        <header>
          <Navbar userSession={userSession} />
        </header>
        <div className="registration-form-container" />
        <div className="login-form-container" />
        {children}
        <footer>
          <div className="footerLink">
            <div>
              <a
                href="/"
                className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
              >
                Логотип ©Copyright 2023
              </a>
            </div>
            <div className="footerBlock">
              <h4 className="footer-h4">Навигация</h4>
              <achildren, userSession, style, font }
                href="/"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover footer-a"
              >
                Личный кабинет
              </a>
              <a
                href="/"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover footer-a"
              >
                Избранное
              </a>
              <a
                href="/"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover footer-a"
              >
                Домашняя страница
              </a>
            </div>

            <div className="footerBlock">
              <a
                href="/contact"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                <h4 className="footer-h4">Контакты</h4>
              </a>
              <p className="footer-p"> Icon info@gmail.com</p>
              <p className="footer-p"> Icon +7 999 888 77 66</p>
              <p className="footer-p"> Icon Vkontakte.ru</p>
            </div>
            <div className="footerBlock">
              <h4 className="footer-h4">Блог</h4>
              <a
                href="/"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Какая то инфа
              </a>
              <a
                href="/"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Какая то инфа
              </a>
              <a
                href="/"
                className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Какая то инфа
              </a>
            </div>
            <div className="wrapper-footer-right" />
          </div>
        </footer>
      </body>
    </html>
  );
}
module.exports = Layout;
