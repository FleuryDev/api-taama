export default function handler(req, res) {
    if (req.method === 'GET') {
        const categories = [
            { id: 1, title: 'Jeunesse', slug: 'jeunesse' },
            { id: 2, title: 'Séries', slug: 'series' },
            { id: 3, title: 'sience fiction', slug: 'science-fiction' },
            { id: 4, title: 'Manga', slug: 'manga' }
        ]
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        return res.status(200).json(categories)
    } else {
        return res.status(405).json({ message: "Method not allowed" })
    }
} 