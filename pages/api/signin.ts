
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from '@prisma/client';
import { Md5 } from "ts-md5";

import { db } from "./.prisma";
const prisma = db as PrismaClient;

export default async function user(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST'){
        res.status(500);
        res.end();
        return;
    }
    const data = req.body;
    console.log(data);
    const userName = await prisma.user.findFirst({
        select: {
            Name: true
        },
        where: {
            Name: data.Name,
        }
    });
    const userEmail = await prisma.user.findFirst({
        select: {
            Email: true
        },
        where: {
            Email: data.Email,
        }
    });
    if ((userName != null) || (userEmail != null)) {
        console.log(userName, userEmail);
        let error = [];
        if (userName != null) {
            error.push("Username Is Taken");
        }
        if (userEmail != null) {
            error.push("email Is Taken");
        }
        res.status(418).json({error});
        res.end();
        return;
    }
    const pr: User | null | void = await prisma.user.create({
        data: {
            Name: data.Name,
            Email: data.Email,
            DOB: (new Date(data.DOB)).toISOString(),
            Password: data.Password,
            PasswordHash: Md5.hashStr(data.Password),
            contact: data.Contact,
            Type: "User"
        }
    }).then(data => {
        res.status(200).json({});
        res.end();
    }).catch(err => {
        res.status(500).json({error: err});
        res.end;
    });
}
