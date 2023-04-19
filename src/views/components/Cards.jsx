const React = require("react");

function Cards({ url }) {
  return (
    <div className="wrapperCards">
      <div className="wrapperImg">
        <img src={url} alt="Картинка" />
      </div>
      <div className="wrapperDescription">
        <div>Описание квартиры (2-комн. кв., площадь, этаж)</div>
        <div>Место сдачи квартиры</div>
        <div>Цена</div>
        <div>
          <div>Кто сдаёт</div>
        </div>
      </div>
    </div>
  );
}

module.exports = Cards;
