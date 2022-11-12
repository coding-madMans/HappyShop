import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Cart} from '@prisma/client';

import { db } from "../.prisma";
const prisma = db as PrismaClient;

export default async function getItems (req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query as unknown as {id: string};
    if (req.method == "GET") {
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
    }else if (req.method == "PATCH"){
        // console.log(req);
        console.log("PATCH : " + id);
        const x = req.body;
        const body = JSON.parse(x) as {"operation": string};
        const {operation} = body;
        console.log(operation);
        const oldCart = await prisma.cart.findFirst({
            where: {id}
        }) as Cart;
        if (oldCart != null) {
            console.log(operation);
            if (operation == "+") {
                console.log("updating " + oldCart.Quantity + " + 1");
                await prisma.cart.update({
                    where: {
                        id
                    },
                    data: {
                        Quantity: oldCart.Quantity + 1
                    }
                });
            }else {
                console.log("updating " + oldCart.Quantity + " - 1, op : " + operation);
                if (oldCart.Quantity > 1) {
                    await prisma.cart.update({
                        where: {
                            id
                        },
                        data: {
                            Quantity: oldCart.Quantity - 1
                        }
                    });
                }else{
                    await prisma.cart.delete({
                        where: {
                            id
                        }
                    })
                } 
            }
        }
        // const cart = await prisma.cart.update({});
        res.status(200);
        res.end();
    }
}
