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

        const { category, sortBy, order, page, limit } = req.query;

        try {
            const skip = (parseInt(page) - 1) * limit;
            // Count query
            const totalCount = await prisma.bande.count({
                where: category ? { categorieId: parseInt(category) } : {}
            });
            res.setHeader('X-Total-Count', totalCount);

            // Data query
            const articles = await prisma.bande.findMany({
                where: category ? { categorieId: parseInt(category) } : {},
                orderBy: {
                    [sortBy || 'created_at']: order?.toLowerCase() === 'asc' ? 'asc' : 'desc'
                },
                skip,
                take: parseInt(limit)
            });

            // Set the total count in the response header
            res.status(200).json({ articles: articles, totalCount: totalCount });
        } catch (error) {
            console.error('Error fetching BDs:', error);
            res.status(500).json({ message: 'Error fetching BDs', error: error.message });
        } finally {
            await prisma.$disconnect();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}