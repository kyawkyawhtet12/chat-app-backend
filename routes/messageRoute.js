import { Router } from "express";
import { sendMessage } from "../controllers/messageController.js";

const messageRouter = Router();


messageRouter.post('/send', sendMessage);

export { messageRouter }