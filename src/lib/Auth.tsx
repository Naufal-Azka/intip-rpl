import jwt from 'jsonwebtoken';
import { Role } from '@prisma/client';

const JWT_SECRET = process.env.JWT_SECRET || 'a4e4bd9d7cf5f7ad460c6479152980b11742bfeadd9f53148a85cf533c53e2a0';
const TOKEN_EXPIRATION = '1h';

export interface UserJWTPayload {
    id: number;
    username: string;
    role: string;
    exp?: number;
}

export function createToken(payload: Omit<UserJWTPayload, 'exp'>): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });
}

export function verifyToken(token: string): UserJWTPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as UserJWTPayload;
    } catch {
        return null;
    }
}
