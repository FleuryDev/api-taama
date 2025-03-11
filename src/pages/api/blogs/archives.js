

export default function handler(req, res) {
    if (req.method === 'GET') {


        res.status(200).json([{
            title: 'An article on NextJs web Site ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam dolore ea ipsum repellendus a reprehenderit nisi, explicabo vitae eligendi laboriosam velit iste? Numquam voluptatem eius laboriosam quasi ut iste?',
            created_at: 'Feb, 28 2025',
            author: 'Innov.dev',
            read: 200,
            slug: 'an-article-on-nextjs-web-Site'
        },
        {
            title: '2nde Article ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam dolore ea ipsum repellendus a reprehenderit nisi, explicabo vitae eligendi laboriosam velit iste? Numquam voluptatem eius laboriosam quasi ut iste?',
            created_at: 'Feb, 28 2025',
            author: 'Innov.dev',
            read: 130,
            slug: 'seconde-article'
        },
        {
            title: '3rd Article ',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam dolore ea ipsum repellendus a reprehenderit nisi, explicabo vitae eligendi laboriosam velit iste? Numquam voluptatem eius laboriosam quasi ut iste?',
            created_at: 'Feb, 28 2025',
            author: 'Innov.dev',
            read: 130,
            slug: 'third-article'
        }
        ])

    } else {
        res.status(500).json({ message: 'Method not allowed ' })
    }


}
