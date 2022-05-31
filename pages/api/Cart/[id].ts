import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

import { db } from "../.prisma";
const prisma = db as PrismaClient;

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    console.log("Cart");
    const { id } = req.query as unknown as string;
    const cart = await prisma.cart.findMany({
        select: {
            id: true,
            Item_id: true,
            Quantity: true
        },
        where: {
            User_id: {is: {id: id}}
        }
    });
    res.status(200).json({data: cart});
    res.end();
}
