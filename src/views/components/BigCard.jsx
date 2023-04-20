const React = require("react");

function BigCard({
  url, region, address, price, seller,
}) {
  const img = "/helpers/example.jpeg";
  return (
    <div className="wrapperBigCard">
      <link rel="stylesheet" href="/style/bigCards.css" />
      <div className="wrapperImg">
        <img src={img} alt="Картинка" className="imgBigCard" />
      </div>
      <div className="wrapperDescription">
        <div>2-комн. кв., площадь, этаж</div>
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
