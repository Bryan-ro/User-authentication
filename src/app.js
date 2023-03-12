import express from "express";
import db from "./config/connectDb.js";
import routes from "./routes/index.js"


db.authenticate()
.then(() => {
    console.log("Successfully connected to the database.");
}).catch((err) => {
    console.error(`Error connecting to database: ${err}`);
});

const app = express();
routes(app)


export default app;
