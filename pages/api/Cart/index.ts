import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

import { db } from "../.prisma";
const prisma = db as PrismaClient;

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const data = req.body;
        const cart = await prisma.cart.findFirst({
            select: {
                id: true,
                User_id: true,
                Item_id: true,
                Quantity: true
            },
            where: {
                User_id: {is: {id: data.UserID}},
                Item_id: {is: {id: data.ItemID}}
            }
        });
        let quant = data.Quantity;
        if (cart != null) {
            quant += cart.Quantity;
            await prisma.cart.update({
                select: {
                    User_id: true,
                    Item_id: true,
                    Quantity: true
                },
                where: {
                    id: cart.id
                },
                data: {
                    Quantity: quant
                }
            }).then((data) => {
                res.status(200).json({Quantity: data.Quantity});
                res.end();
            })
        }else {
            await prisma.cart.create({
                data: {
                    User_id: {connect: {id: data.UserID}},
                    Item_id: {connect: {id: data.ItemID}},
                    Quantity: quant
                }
            }).then((data) => {
                res.status(200).json({Quantity: data.Quantity});
                res.end();
            })
        }
    }
}
