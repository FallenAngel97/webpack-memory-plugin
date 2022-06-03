class WebpackMemoryPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      'WebpackMemoryPlugin',
      () => {
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`üêè Amount of RAM used: ${Math.round(used * 100) / 100} MB`);
      }
    );
  }
}

module.exports = WebpackMemoryPlugin;
