import express from "express";

import { PasswordsController } from '../Controllers/passwordsControllers.js'

const passwordRouter = express.Router();

const passwordsController = new PasswordsController()
passwordRouter.get("/:userName/:password", passwordsController.verifyPwd)
passwordRouter.post("/", passwordsController.addPwd)
passwordRouter.put("/", passwordsController.updatePwd)
passwordRouter.delete("/:userName", passwordsController.deletePwd)


export {

    passwordRouter

}