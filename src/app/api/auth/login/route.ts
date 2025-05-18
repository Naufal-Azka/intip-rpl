import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { createToken } from '@/lib/Auth';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();

        const user = await prisma.user.findFirst({
            where: { username },
        });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        const token = createToken({
            id: user.id,
            username: user.username,
            role: user.role,
            association_kelas: user.association_kelas
        });

        return NextResponse.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
