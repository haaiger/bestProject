const React = require('react');

function ClosedMail({ mail }) {
  return (
    <div className="adminMail">
      <div className="rightSide">
        {mail.map((msg) => (
          <div className="mail-container" id={msg.id}>
            <p className="p-main-container">
              <button type="button" className="p-btn-close" id={msg.id}>
                X
              </button>
              <b>Имя:</b>
              {msg.name}
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
  );
}

module.exports = ClosedMail;
