import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH,OPTIONS");
        res.setHeader("Content-Type", "application/json");

        const { userId, bandeId } = JSON.parse(req.body);

        try {
            await prisma.readers.create({
                data: {
                    user_id: parseInt(userId),
                    bande_id: parseInt(bandeId)
                }
            });

            res.status(200).json({ message: 'Favorite added successfully' });
        } catch (error) {
            console.error('Error adding favorite:', error);
            res.status(500).json({ message: 'Error adding favorite', error: error.message });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}