import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/containers/app/App';
import Html from './client/Html';
import bodyParser from 'body-parser';
import Styles from './index.css';

const port = 8000;
const server = express();

server.use(bodyParser.json())

server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', (req, res) => {

  const body = renderToString(<App />);
  const styles = Styles;
  const title = 'Server side Rendering';

  res.send(
    Html({
      body,
      styles,
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);