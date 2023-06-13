const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products.routes");
const morgan = require("morgan");
const config = require("./config");

const bodyParser = require('body-parser');
const app = express();

// Configurar límite máximo de tamaño de carga útil a 50MB
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Resto de la configuración del servidor...


// settings
app.set("port", config.port);

// Middlewares
//app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", productRoutes);

module.exports = app;
