import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH,OPTIONS");
        res.setHeader("Content-Type", "application/json");

        const { userId } = req.query;

        try {
            const favorites = await prisma.readers.findMany({
                where: { user_id: parseInt(userId) },
                include: { bande: true }
            });

            res.status(200).json(favorites);
        } catch (error) {
            console.error('Error fetching favorites:', error);
            res.status(500).json({ message: 'Error fetching favorites', error: error.message });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}