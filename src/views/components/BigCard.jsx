const React = require("react");

function BigCard({
  region, address, price, seller, photo, typeHouse,
}) {
  return (
    <div className="wrapperBigCard">
      <link rel="stylesheet" href="/style/bigCards.css" />
      <div className="wrapperImg">
        <img src={photo} alt="Картинка" className="imgBigCard" />
      </div>
      <div className="wrapperDescription">
        <div>{typeHouse}</div>
        <div>
          <div>
            Район:
            {' '}
            {region}
          </div>
          <div>
            Улица:
            {' '}
            {address}
          </div>
        </div>
        <div>
          Цена:
          {' '}
          {price}
        </div>
        <div>
          Продавец:
          {' '}
          {seller}
        </div>
      </div>
    </div>
  );
}

module.exports = BigCard;
