const React = require("react");
const Navbar = require("./Navbar");

function Layout({ children, userSession }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/style/normalize.css" /> */}
        <link rel="stylesheet" href="/style/layout.css" />

        <link rel="stylesheet" href="/style/logreg.css" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        />
        <script defer src="/js/logreg.js" />

        <title>Project</title>
      </head>
      <body>
        <header>
          <Navbar userSession={userSession} />
        </header>
        <div className="registration-form-container" />
        <div className="login-form-container" />
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
