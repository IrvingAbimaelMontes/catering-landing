
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'catering-landing',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/catering-landing"
  },
  {
    "renderMode": 2,
    "redirectTo": "/catering-landing",
    "route": "/catering-landing/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 883, hash: '4201f2ae9768380fd9497d3ef20c48f5030f088dd25245d9f234c005b24ba6ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: '8f878a81887071fdf836133f0840afebb0fbb3c2d79026775e96abe98a56bb58', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18826, hash: '53c281c78a1847cdb324e70bba742dd1933f9e6c6805369f3157bb2b56d90fa8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-X4GQPHCK.css': {size: 1048, hash: 'N7gk4eKfNxw', text: () => import('./assets-chunks/styles-X4GQPHCK_css.mjs').then(m => m.default)}
  },
};
