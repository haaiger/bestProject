const React = require("react");

function Card({ title, text, link }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={link || "https://clck.ru/34BUog"}
        alt="One card"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button type="button" className="btn btn-primary buttonHome">
          Добавить в изобранное
        </button>
      </div>
    </div>
  );
}

module.exports = Card;
