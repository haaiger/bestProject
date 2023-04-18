const React = require("react");
const Layout = require("./Layout");

function HomePage({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <div>Home page</div>
      <form className="full-registration-form" name="fullregistrationForm">
        <label htmlFor="firstName">Имя</label>
        <input type="text" name="firstName" id="firstName" required />

        <label htmlFor="middleName">Отчество</label>
        <input type="text" name="middleName" id="middleName" required />

        <label htmlFor="lastName">Фамилия</label>
        <input type="text" name="lastName" id="lastName" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="phone">Телефон</label>
        <input type="tel" name="phone" id="phone" required />

        <label htmlFor="password">Пароль</label>
        <input type="password" name="password" id="password1" required />

        <label htmlFor="confirmPassword">Подтвердите пароль</label>
        <input type="password" name="confirmPassword" id="password2" required />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </Layout>
  );
}

module.exports = HomePage;
