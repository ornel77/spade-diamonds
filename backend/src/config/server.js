const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const apiRouter = require('../modules');
const path = require('path');


app.use(express.json())
app.use(express.urlencoded({extended: true}))
const corsOption = { origin: "http://loclahost:5173", credentials: true }
app.use(express.static(path.join(__dirname + '/../../public')));
app.use(cors(corsOption));
app.options('*', cors(corsOption));
app.use(cookieParser());
app.use(apiRouter);

module.exports = app;
