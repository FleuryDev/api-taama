import jwt from 'jsonwebtoken';

export default async function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
    res.setHeader("Content-Type", "application/json");
    if (req.method === 'POST') {

        const { token } = JSON.parse(req.body)
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.status(500).json({ message: 'JWT_SECRET is not define !' })
            return;
        }
        if (token) {
            try {

                const decoded = jwt.verify(token, secret);


                res.status(200).json({ user: decoded })
            } catch (error) {
                res.status(401).json({ message: 'Invalid Token !', state: 0 })
            }
        } else {
            res.status(404).json({ message: 'JWT Token not define !' })
            return;

        }

    } else {
        res.status(405).json({ message: "Method not allowed !" })

    }
}