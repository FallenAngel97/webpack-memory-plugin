[![Featured on Openbase](https://badges.openbase.com/js/featured/@decodeapps/webpack-memory-plugin.svg?token=mfJGQXHcJXlQ0qhv4yoySRDIsA6e1ebrbVDJuevBbqI=)](https://openbase.com/js/@decodeapps/webpack-memory-plugin?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)
### 🐏 Webpack Memory Plugin

Displays amount of RAM used after the webpack compilation

## Installation

In case of npm
`npm i -D @decodeapps/webpack-memory-plugin`

In case of yarn:
`yarn add -D @decodeapps/webpack-memory-plugin`

### Example

Add following to the `webpack.config.js`:

```javascript
const WebpackMemoryPlugin = require('@decodeapps/webpack-memory-plugin');
// other plugins

module.exports = {
  // other statements
  plugins: [
    new WebpackMemoryPlugin()
  ]
}
```
