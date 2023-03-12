import userController from "../controllers/userController.js";
import sessionsMiddlewaresController from "../middlewares/middleControllers/sessionMiddlewaresController.js";
import express from "express";

const routes = express.Router();

routes
    .get("/user/all", sessionsMiddlewaresController.checkIfUserIsAdministrator ,userController.viewAllUsers)
    .get("/user/one/:id", userController.viewOneUser)
    .post("/user/create", sessionsMiddlewaresController.checkIfUserIsAdministrator,  userController.createUser)
    .delete("/user/delete/:id", userController.deleteOneUser)
    .put("/user/update/:id", userController.updateOneUser)


export default routes;
