
export default function handler(req, res) {

    const { slug } = req.query
    if (!slug) {
        return res.status(119).json({ message: 'slug is not defined' })

    }
    if (req.method === 'GET') {

        const data = [{
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
        ]
        // let data;
        // getData = async (data) => {
        //     const resp = await fetch('/api/blogs/archives')
        //     data = await resp.json()
        // }
        // getData()


        // console.error('param', data.filter((el) => el.slug == slug))
        res.status(200).json(data.filter((el) => el.slug == slug))

    } else {
        res.status(500).json({ message: 'Method not allowed ' })
    }
}
