export default function handler(req, res) {
    if (req.method === 'GET') {
        const articles = [
            {
                title: "Le vent contre le temps 🇸🇳",
                slug: "le-vent-contre-le-temps-sn",
                description: " Dans un Dakar où les super-pouvoirs font partie du quotidien, Adama, 19 ans, peut contrôler le vent, mais il est insouciant. Ce jour-là, distrait, il oublie d'aller au marché acheter du poisson pour le dîner familial avec des invités importants. Paniqué, il se rend compte qu'il doit impérativement y aller avant la fermeture, malgré les embûches de la ville. Entre action et rebondissements, suivez les aventures d'Adama dans une course contre la montre au cœur de Dakar.",
                images: [
                    {
                        "url": "/ca1673ba-8c8f-4c7c-86f1-a97e7f25486d.png",
                        "caption": null
                    },
                    {
                        "url": "/b172644a-e987-4b7d-80ff-223fe9544e78.png",
                        "caption": null
                    }
                ],
                read_count: 200,
                created_at: "octobre 2024",
                status: true
            },
            {
                title: "Héritage",
                slug: "heritage",
                description: "",
                images: [
                    {
                        "url": "/8fad6e2a-b1b1-42af-9e3d-fc1e3f9f2dcf.png",
                        "caption": null
                    },
                    {
                        "url": "/307d0da9-8a46-4820-af2b-667eeac2af9a.png",
                        "caption": null
                    }
                ],
                read_count: 20,
                created_at: "octobre 2024",
                status: false
            }
        ]
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Max-Age", "1800");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
        return res.status(200).json(articles)
    } else {
        return res.status(405).json({ message: "Method not allowed" })
    }
} 