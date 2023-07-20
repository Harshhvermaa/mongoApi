import express from "express";
import Router from "./Routes/routes.js";
import mongoDB from "./database/mongoDatabse.js";

const app = express();
const port = 3000;

app.use( "/",Router);
app.listen(port, () => console.log(`Listening on port ${port}!`));
