import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "./config";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_PUBLIC_KEY, { clockTolerance: 300000000 });
        console.log("Decoded JWT:", decoded);
        if (!decoded || !decoded.sub) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
    
        req.userId = decoded.sub as string;
    } catch (error) {
        console.error("JWT verification error:", error); // Logs what failed in detail
        throw error;
    }
    
    
    next()
}