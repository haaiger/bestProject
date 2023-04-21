const React = require("react");
const Navbar = require("./Navbar");

function Layout({
  children, userSession, style, font,
}) {
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
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-info">Home</a></li>
            <li className="nav-item"><a href="/profile" className="nav-link px-2 text-info">Profile</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link px-2 text-info">Contacts</a></li>
          </ul>
          <p className="text-center text-info">&copy; Софи, самый лучший заказчик!</p>
        </footer>
      </body>
    </html>
  );
}
module.exports = Layout;
