const dashdash = require('dashdash');
const express = require('express')
const app = express();


function startServer() {
  const { port, staticAssetFolder } = initServerOption();
  app.use(express.static(staticAssetFolder));
  app.listen(port, () => {
    console.log(`Ready to serve app at http://localhost:${port}`)
  });
}

function initServerOption() {
  const options = [
    {
      name: 'port',
      type: 'number',
      help: 'server port to listen to',
      default: 3000
    }, {
      name: 'staticAssetFolder',
      type: 'string',
      help: 'directory of static assets',
      default: 'build'
    },
    {
      names: ['help', 'h'],
      type: 'bool',
      help: 'Print this help and exit.'
    }
  ];

  const parser = dashdash.createParser({ options: options });
  let opts;
  try {
   opts = parser.parse(process.argv);
  } catch (e) {
    console.error('server start up option error: %s', e.message);
    process.exit(1);
  }

  console.log("# opts:", opts);
  return opts;
}

startServer();