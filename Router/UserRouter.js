import express from "express";
import { UserController } from '../Controllers/UserController.js'
const userRouter = express.Router();

userRouter.get('/users/:id', (req, res) => {
     
})
 

userRouter.post('/users', (req, res) => {

})

export default userRouter


import express from "express";

import { TestController } from '../controllers/testController.js'

const testRouter = express.Router();

const testcontroller = new TestController()

testRouter.get("/user/:id", testcontroller.getTestById)

testRouter.post("/", testcontroller.addTest)

testRouter.delete("/:id", testcontroller.deleteTest)

testRouter.put("/:id", testcontroller.updateTest)

export {

    testRouter

}