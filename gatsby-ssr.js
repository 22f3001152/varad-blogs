import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="github-pages-spa-redirect"
      dangerouslySetInnerHTML={{
        __html: `
          (function(l) {
            if (l.search[1] === '/' ) {
              var decoded = l.search.slice(1).split('&').map(function(s) { 
                return s.replace(/~and~/g, '&')
              }).join('?');
              window.history.replaceState(null, null,
                  l.pathname.slice(0, -1) + decoded + l.hash
              );
            }
          }(window.location))
        `,
      }}
    />,
  ]);
};
