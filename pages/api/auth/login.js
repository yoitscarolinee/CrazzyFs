import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const secret = process.env.SECRET;

export default async function (req, res) {
    const {password} = req.body;

    if(password === 'Admin') {

        const token = sign(
            {
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
                username: 'AutoCrazzY',
            },
            secret
        );

        const serialized = serialize("OursiteJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 30,
            path: "/"
        });

        res.setHeader("Set-Cookie", serialized);
        res.status(200).json({
            message: 'Login successful'
        });
        
    } else {
        res.json({ message: "Invalid credentials!" });
    }
}