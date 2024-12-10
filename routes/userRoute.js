import { Router } from "express";
import { login, registerUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', login)

export { userRouter }