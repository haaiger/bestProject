const React = require("react");
const Layout = require("./Layout");

function FullRegForm({ userSession }) {
  return (
    <Layout userSession={userSession}>
      <form
        className="p-4 border rounded shadow-sm full-registration-form"
        name="fullregistrationForm"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="h4 mb-4">Полная регистрация</h1>
        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Отчество</label>
          <input
            type="text"
            className="form-control"
            name="middleName"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Фамилия</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Телефон</label>
          <input type="tel" className="form-control" name="phone" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Пароль</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password1"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Подтвердите пароль</label>
          <input
            type="password"
            className="form-control"
            id="password2"
            required
          />
        </div>
        <h5 className="msg" />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = FullRegForm;
