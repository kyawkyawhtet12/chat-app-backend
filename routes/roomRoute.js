import { Router } from "express";
import { createRoom } from "../controllers/roomController.js";

const roomRouter = Router();

roomRouter.post('/create', createRoom)

export { roomRouter }