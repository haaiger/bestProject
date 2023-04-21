const React = require('react');
const Navbar = require('./Navbar');

function Layout({ children, userSession, style, font }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/style/normalize.css" /> */}
        <link rel="stylesheet" href="/style/layout.css" />
        <link rel="stylesheet" href="/style/contact.css" />
        <link rel="stylesheet" href="/style/adminMail.css" />
        <link rel="stylesheet" href="/style/logreg.css" />
        <link rel="stylesheet" href={style} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,200;0,500;0,900;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Roboto:ital,wght@0,500;0,900;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        />
        <script defer src="/js/logreg.js" />
        <script defer src="/js/adminMail.js" />
        <title>Project</title>
      </head>
      <body>
        <header>
          <Navbar userSession={userSession} />
        </header>
        <div className="registration-form-container" />
        <div className="login-form-container" />
        <div className="confirm-exit" />
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
              <a
                href="/profile"
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
