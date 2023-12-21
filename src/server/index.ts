import express from "express";
import bodyParser from "body-parser";
import { handleError } from "../handlers/error.handler";
import { handleResponse } from "../handlers/response.handler";
import userRoutes from "../server/routes/users.routes";
import repoRoutes from "../server/routes/repos.routes";
const app = express();
app.use(express.json());

var cors = require('cors')

app.use(cors()) 

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", userRoutes);
app.use("/api", repoRoutes);
app.use(handleResponse);
app.use(handleError);

export default app;
