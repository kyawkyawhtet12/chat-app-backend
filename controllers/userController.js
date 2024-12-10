import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken";

const SECRET_KEY =process.env.SECRET_KEY;
const prisma = new PrismaClient();
const registerUser = async (req, res) => {
    console.log(req.body);
    
    const { username, email, password} = req.body;
    const saltRound = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRound)
    
    const user = await prisma.user.create({
        data: {
            username : username,
            email : email,
            password : hashedPassword,
        }
    });

    if(user){
        return res.status(201).send({
            user: user,
            message: "User Register Successfully!"
        })
    }else{
        return res.status(500).send({
            data : null,
            "message" : "Something Went Wrong"
        })
    }

}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await prisma.user.findUnique({
        where:{
            email: email
        }
    })
    let checkPassword;
    if(user){
        checkPassword = bcryptjs.compare(password, user.password);
    }

    if(user && checkPassword) {

        const payload = {
            email : user.email,
            password : user.password

        }
        const token = jsonwebtoken.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        res.send({
            user: user,
            token: token,
        })
    }else{
        res.send({
            message: "Incorrect Crenditial",
        })
    }



}

export { registerUser , login}