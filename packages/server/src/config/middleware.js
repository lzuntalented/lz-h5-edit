const path = require('path');
const isDev = think.env === 'development';

module.exports = [
  {
    handle: 'meta',
    options: {
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: true,
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    enable: true,
    options: {
      keepExtensions: true,
      limit: '5mb',
      uploadDir: path.join(think.ROOT_PATH, 'tmp')
    }
  },
  {
    handle: 'router',
    options: {}
  },
  'logic',
  'controller'
];
