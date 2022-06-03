### 🐏 Webpack Memory Plugin

Displays amount of RAM used after the webpack compilation

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
