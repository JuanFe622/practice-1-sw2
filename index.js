const express = require("express");
const mongoose = require("mongoose");
const app = express();
const newApi = require('./src/routes');

require("dotenv").config();
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log("Running in the port ", port);
});

mongoose
  .connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log("Successful connection with MongoDB"))
  .catch((err) => console.log(err));

// Primero accede al index.js de Routes y luego a las rutas de cada modelo
app.use(express.json());
newApi(app);

