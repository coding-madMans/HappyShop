import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

import { db } from "./prisma";
const prisma = db as PrismaClient;

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    prisma.item.findMany({
        select: {
            id: true,
            Name: true,
            Price: true,
            Quantity: true,
            Images: true,
            Tags: true
        }
    }).then(Items => {
      console.log("items")
        res.status(200).json(Items);
        res.end();
    })
}
