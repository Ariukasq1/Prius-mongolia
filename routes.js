const routes = require('next-routes');

// Setup router.
module.exports = routes().add('index', '/');
// module.exports = routes().add('index', '/').add('single-post', '/posts/:slug');
