// import { PrismaClient } from '@PrismaClient';

import bcrypt from 'bcryptjs';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method) {
        const { email, password } = JSON.parse(req.body)
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)
        // try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        })

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.setHeader("Content-Type", "application/json");
        return res.status(201).json(newUser)
        // } catch (error) {

        //     return res.status(500).json({ message: 'Creation failed !', error })
        // }
    } else {

        return res.status(406).json({ message: 'Method not allowed !' })
    }
}