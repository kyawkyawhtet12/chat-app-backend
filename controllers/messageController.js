import { PrismaClient } from "@prisma/client";
import io from "../socket.js"

const prisma = new PrismaClient();


const sendMessage = async (req, res) => {
    const { content,userId,chatRoomId} = req.body;
    const message = await prisma.message.create({
        data: {
            content : content,
            userId : userId,
            chatRoomId : chatRoomId,
        },
        include : {
            user : true,
            chatRoom : true
        }
    })

    if(message){
        res.status(201).send({
            data: message,
            message : "Message Successfully Sent"
        })
    }else{
        res.status(500).send({
            data: null,
            message: "Something went wrong with sending message",
        });
    }
}

export { sendMessage }