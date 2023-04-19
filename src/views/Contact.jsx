const React = require('react');
const Layout = require('./Layout');

const font = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Roboto:ital,wght@0,500;0,900;1,400&display=swap" rel="stylesheet">`;
const style = `/style/contact.css`;

function Contact() {
  return (
    <Layout style={style} font={font}>
      <body>
        <div className="bodyContact">
          <div className="center">
            <div className="main">
              <div>
                <h1 className="hTitle">
                  Мы всегда рады помочь Вам в подборе недвижимости. Мы
                  внимательно относимся к каждому обращению и доспуны для вас с
                  пн по пт с 9:00 до 19:00
                </h1>
                <h3 className="hTitle">
                  Вы можете связаться с нами удобным для Вас способом
                </h3>
              </div>
              <div>
                <h3 className="hTitle">Телефон службы поддержки клиентов</h3>
                <p>· +7 999 777 33 22</p>
              </div>
              <div>
                <h3 className="hTitle">
                  Телефон для индивидуального подбора жилья
                </h3>
                <p>· +7 999 111 22 33</p>
              </div>
              <div>
                <h3 className="hTitle">Адрес электронной почты</h3>
                <p>· info@gmail.com</p>
              </div>
              <div>
                <h3 className="hTitle">WhatsApp / Viber</h3>

                <input
                  type="image"
                  src="./img/whatsApp.png"
                  alt="wsApp"
                  name="btn-wsApp"
                  className="icon"
                  id="btn-wsApp"
                />

                <input
                  type="image"
                  src="./img/viber.png"
                  alt="viber"
                  name="btn-viber"
                  className="icon"
                  id="btn-viber"
                />
              </div>
              <div>
                <h3 className="hTitle">Социальные сети</h3>

                <input
                  type="image"
                  src="./img/vk.png"
                  alt="vk"
                  name="btn-vk"
                  className="icon"
                  id="btn-vk"
                />
                <input
                  type="image"
                  src="./img/telegram.png"
                  alt="tg"
                  name="btn-tg"
                  className="icon"
                  id="btn-tg"
                />
              </div>
            </div>
            <div className="bottomForm">
              <form name="feedBack">
                <div>
                  <h3 className="hTitle">
                    Также вы можете воспользоваться электронной формой обращения
                  </h3>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Введите имя
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="name"
                  />
                  <div id="emailHelp" className="form-text">
                    тут можно оставить пометку
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Вверди номер телефона
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Введите электронную почту
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Введите ваш вопрос
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="question"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <script defer src="/js/contact.js" />
      </body>
    </Layout>
  );
}

module.exports = Contact;
