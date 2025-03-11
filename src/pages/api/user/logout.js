export default async function handler(req, res) {

    if (req.method === 'POST') {

        const { email } = JSON.parse(req.body)
        console.log(email)
        const token = localStorage.getItem('app_user_token')
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.status(500).json({ message: 'JWT_SECRET is not define !' })

        }
        if (token) {
            try {
                const decoded = jwt.verify(token, secret);
                if (decoded.email === email) {
                    localStorage.removeItem('app_user_token')
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    res.setHeader("Access-Control-Allow-Credentials", "true");

                    res.setHeader("Access-Control-Max-Age", "1800");
                    res.setHeader("Access-Control-Allow-Headers", "content-type");
                    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH,OPTIONS");
                    res.setHeader("Content-Type", "application/json");
                    res.status(200).json({ message: 'Disconnected !' })
                    //window.Location('/')
                } else {
                    res.status(500).json({ message: 'Not Disconnected !' })


                }
            } catch (error) {
                res.status(401).json({ message: 'Invalid Token !' })
            }
        } else {
            res.status(404).json({ message: 'JWT Token not define !' })
            return;

        }

    } else {

        res.status(405).json({ message: 'Method not allowed !' })

    }
}