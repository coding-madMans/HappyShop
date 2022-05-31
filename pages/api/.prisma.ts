
import { PrismaClient } from '@prisma/client';

let db: PrismaClient | null = null;

if (process.env.NODE_ENV === 'production') {
    db = new PrismaClient();
}else {
    if (db == undefined) {
        global.db = new PrismaClient();
    }
    db = global.db;
}

export { db };
