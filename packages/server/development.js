const path = require('path');
const Application = require('thinkjs');
const watcher = require('think-watcher');
const babel = require('think-babel');
const notifier = require('node-notifier');

const instance = new Application({
  ROOT_PATH: __dirname,
  APP_PATH: path.join(__dirname, 'app'),
  watcher: watcher,
  transpiler: [babel, {
    presets: ['think-node']
  }],
  notifier: notifier.notify.bind(notifier),
  env: 'development'
});

instance.run();
