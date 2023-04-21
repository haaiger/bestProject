const React = require('react');
const Layout = require('./Layout');

function AdminGmail({ userSession, mail }) {
  return (
    <Layout userSession={userSession}>
      <div className="adminMail">
        <div className="leftSide">
          <div className="static-btn">
            <button type="button" className="btn-msg new-btn">
              Новые письма
            </button>
            <button type="button" className="btn-msg close-btn">
              Закрыте вопросы
            </button>
          </div>
        </div>
        <div className="rightSide">
          {mail.map((msg) => (
            <div className="mail-container" id={msg.id}>
              <p className="p-main-container">
                <button type="button" className="p-btn-close" id={msg.id}>
                  X
                </button>
                <b>Имя:</b> {msg.name}
              </p>
              <p className="p-main-container">
                <b>Номер телефона:</b> {msg.number}
              </p>
              <p className="p-main-container">
                <b>Почта: </b>
                {msg.email}
              </p>
              <p className="p-main-container">
                <b>Вопрос:</b> {msg.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

module.exports = AdminGmail;
