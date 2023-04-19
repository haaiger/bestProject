require("@babel/register");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

function renderTemplate(session, reactComponent, props, request, response) {
  // console.log('React Component', reactComponent)
  // console.log("Check props in render template", props);
  const reactElement = React.createElement(reactComponent, {
    ...props,
    ...response.app.locals,
    ...response.locals,
    userSession: session || {},
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  response.send(`<!DOCTYPE html>${html}`);
  response.end();
}

module.exports = renderTemplate;
