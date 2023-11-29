import app from "./server";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: ".env" });

const port = process.env.PORT || 9000;
const connectionString = process.env.DB_CONNECTION;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.log("Error al conectar la base de datos:", error);
  });

app.listen(port, () => {
  console.log(`Listening on port:${port}!!!`);
});

//En el GitIgnore poner el archivo .env node_modules y token.
