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
const WebpackMemoryPlugin = require('./WebpackMemoryPlugin');
// other plugins

module.exports = {
  // other statements
  plugins: [
    new WebpackMemoryPlugin()
  ]
}
```
