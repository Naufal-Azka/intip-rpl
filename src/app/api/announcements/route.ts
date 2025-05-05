import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const { content, authorName } = await request.json();

        const announcement = await prisma.announcement.create({
            data: {
                content,
                authorName,
            },
        });

        return NextResponse.json(announcement);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const announcement = await prisma.announcement.findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(announcement);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch announcement' }, { status: 500 });
    }
}
