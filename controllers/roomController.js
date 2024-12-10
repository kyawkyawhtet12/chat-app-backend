import { PrismaClient } from "@prisma/client";
import {io} from "../socket.js"

const prisma = new PrismaClient()

const createRoom = async (req, res) => {


    // console.log(req.body)
    const { name, userIds, assignedBy } = req.body;
    const ids = JSON.parse(userIds)
    const users = await prisma.user.findMany({
        where: { id: { in: ids } },
    });
    

    const room = await prisma.chatRoom.create({
        data : {
            name: name,
            ChatRoomUser: {
                create: ids.map((userId) => ({
                  userId,
                  assignedBy,
                })),
              },
        }
    })

    if(room){
        res.status(201).send({
            room : room,
            message : "Room created successfully"
        })
    }else{
        res.status(500).send({
            room : null,
            message : "Something went wrong "
        })
    }
}

export { createRoom }