import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    if (req.method) {
        const data = req.body
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            // try {
            const newUser = await prisma.bande.create({
                data: element
            })
        }

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        res.setHeader("Content-Type", "application/json");

        return res.status(201).json({ message: 'created !' })
        // } catch (error) {

        //     return res.status(500).json({ message: 'Creation failed !', error })
        // }
    } else {

        return res.status(406).json({ message: 'Method not allowed !' })
    }
}