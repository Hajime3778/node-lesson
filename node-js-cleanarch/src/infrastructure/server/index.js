const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
  constructor(config) {
    this.config = config;
    this.express = express();

    this.express.disable('x-powered-by');
    this.express.use(cors()).use(bodyParser.json());
  }

  run() {
    return new Promise((resolve) => {
      const server = this.express.listen(this.config.server.port, () => {
        console.log('Node.js is listening to PORT:' + server.address().port);
        resolve();
      });
    });
  }
}

module.exports = Server;