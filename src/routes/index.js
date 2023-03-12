import express from "express";
import userRoutes from "./userRoutes.js";
import sessionRoutes from "./sessionRoutes.js";
import cors from "cors";

const routes = (app) => {
    app.use(
        cors(),
        express.json(),
        sessionRoutes,
        userRoutes
    );
};

export default routes;