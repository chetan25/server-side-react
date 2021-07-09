import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/routes';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

export default (req, store) => {
    // this is generated html
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );
    const html = `
        <html>
           <head></head>
           <body>
                <script>
                   window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <div id="root">
                   ${content}
                </div>
                <script src="bundle.js"></script>
           </body>
        </html>
    `;

    return html;
}