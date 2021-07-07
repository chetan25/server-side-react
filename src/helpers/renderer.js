import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/routes';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export default (req, store) => {
    // this is generated html
    const content = renderToString(
        <Provider stroe={store}><StaticRouter context={{}} location={req.path}><Routes/></StaticRouter></Provider>
    );
    const html = `
        <html>
           <head></head>
           <body>
                <div id="root">
                   ${content}
                </div>
                <script src="bundle.js"></script>
           </body>
        </html>
    `;

    return html;
}