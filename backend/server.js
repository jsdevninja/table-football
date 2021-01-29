require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./app/routes/index"));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to table-football backend application." });
});

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Table Football Backend API with Swagger",
      version: "0.1.0",
      description: "Table Football Backend API Swagger Doc",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "William Wang",
        url: "https://www.linkedin.com/in/williamwang807",
        email: "topit89807@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./app/routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
