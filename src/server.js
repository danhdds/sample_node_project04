const express = require('express');
const bootstrap = require('./bootstrap.js');

const app = express();

// requesting parsing
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

const router = express.Router();
app.use(router);

bootstrap(app, router);