import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { slug } = req.query;

    if (req.method === 'GET') {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH,OPTIONS");
        res.setHeader("Content-Type", "application/json");

        try {
            const article = await prisma.bande.findUnique({
                where: { slug: slug },
            });
            if (article) {
                res.status(200).json(article);
            } else {
                res.status(404).json({ message: 'Article not found' });
            }
        } catch (error) {
            console.error('Error fetching BD:', error);
            res.status(500).json({ message: 'Error fetching BD', error: error.message });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}