    const { defineConfig } = require('cypress');
    const { cypressConfig } = require('@axe-core/watcher');

    module.exports = defineConfig(
      cypressConfig({
        axe: {
          apiKey: 'a92bb208-5161-468d-b631-511ebecc36cd'
        },
        defaultCommandTimeout: 10000
      })
    );
