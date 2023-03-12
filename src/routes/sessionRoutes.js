import express from "express";
import sessionController from "../controllers/sessionController.js";

const routes = express.Router();

routes
    .post("/login", sessionController.verifyCredentialsAndStoreCookie)

export default routes;