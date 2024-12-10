import { messageRouter } from "./routes/messageRoute.js";
import { roomRouter } from "./routes/roomRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { app, io, server} from "./socket.js";
import express from "express"

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
});

// Start the server

app.use(express.urlencoded({extended: true}))
app.use('/users', userRouter)
app.use('/room', roomRouter)
app.use('/message', messageRouter)

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
