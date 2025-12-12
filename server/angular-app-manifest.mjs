
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/catering-landing/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/catering-landing"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/catering-landing",
    "route": "/Program%20Files/Git/catering-landing/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 905, hash: 'fb1a1a97e50a5f8cc40fc5be79ea69947ba42507d8844ac7a8581fed12102326', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: 'd199fd4d61dac4f694d8e6fc0e3f0d9043e7f69435e20e621e88fc07043ac3db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-X4GQPHCK.css': {size: 1048, hash: 'N7gk4eKfNxw', text: () => import('./assets-chunks/styles-X4GQPHCK_css.mjs').then(m => m.default)}
  },
};
