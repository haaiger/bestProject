const React = require("react");
const Layout = require("./Layout");

function HomePage({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <link rel="stylesheet" href="/style/home.css" />
      <script defer src="/js/home.js" />
      <div>Home page</div>
    </Layout>
  );
}

module.exports = HomePage;
