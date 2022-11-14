
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';
import { Md5 } from "ts-md5";

import { db } from "./prisma";
const prisma = db as PrismaClient;

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST'){
        res.status(400);
        res.end();
        return;
    }
    const data = req.body;
    // console.log(data);
    let user = [] as any;
    await prisma.user.findMany({
        select: {
            id: true,
            Name: true,
            Email: true,
            PasswordHash: true
        },
        where: {
            Name: data["Name|Email"]
        }
    }).then(userData => {
        if (userData.length > 0) {
            user.push(...userData);
        }
    })
    await prisma.user.findMany({
        select: {
            id: true,
            Name: true,
            Email: true,
            PasswordHash: true
        },
        where: {
            Email: data["Name|Email"]
        }
    }).then(userData => {
        if (userData.length > 0) {
            user.push(...userData);
        }
    })
    // console.log(user);
    if (user.length > 1 || user.length === 0) {
        res.status(400).json({error: "Invalid Name or Email"});
        res.end();
    } else if (user[0].PasswordHash === Md5.hashStr(data.Password)) {
        // console.log({success: "succuess", id: user[0]});
        res.status(200).json({success: "succuess", id: user[0].id});
        res.end();
    } else {
        res.status(400).json({error: "invalid_password or credentials"});
        res.end();
    }
};
