import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export default async function handler(req, res) {

    if (req.method == 'POST') {

        try {
            const { email, password } = JSON.parse(req.body)

            const user = await prisma.user.findUnique({
                where: { email },
            })

            if (user && bcrypt.compareSync(password, user.password)) {
                const app_user_token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '6h' })

                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Max-Age", "1800");
                res.setHeader("Access-Control-Allow-Headers", "content-type");
                res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
                res.setHeader("Content-Type", "application/json");
                //res.send(JSON.stringify(app_user_token));
                return res.status(200).json({ tokens: app_user_token, user })
            } else {
                return res.status(401).json({ message: 'Invalid password or email' })
            }

        } catch (error) {

            return res.status(500).json({ message: 'Login failed !', error })
        }
    } else {
        return res.status(405).json({ message: 'Method not allowed !' })
    }
}