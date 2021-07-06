import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/routes';
import { StaticRouter } from 'react-router-dom';

export default (req) => {
    // this is generated html
    const content = renderToString(
        <StaticRouter context={{}} location={req.path}><Routes/></StaticRouter>
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