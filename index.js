const express = require('express');
const cors = require('cors');
const headlineTemplates = require('./headlines');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
