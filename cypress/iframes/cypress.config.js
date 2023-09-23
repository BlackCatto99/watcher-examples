const { defineConfig } = require('cypress')
const { cypressConfig } = require('@axe-core/watcher')

// Get your configuration from environment variables.
const { API_KEY, SERVER_URL = 'https://axe.deque.com' } = process.env

module.exports =   defineConfig(
  cypressConfig({
    projectId: "ay6jep",
    axe: {
      apiKey: 'a92bb208-5161-468d-b631-511ebecc36cd',
      serverURL: SERVER_URL
    },
    defaultCommandTimeout: 10000,
    video: false
  })
)
