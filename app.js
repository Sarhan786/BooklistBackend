const express = require("express");
const Connect = require("./src/Connection/connect");
const loginroutes = require("./src/Router/Register");

const app = express();

app.use(express.json());

app.use("/",loginroutes);