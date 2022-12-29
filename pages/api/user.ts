import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { db } from "./prisma";
const prisma = db as PrismaClient;

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  const data = await prisma.user.findUnique({
    select: { id: true, Name: true, Type: true, Cart: true },
    where: {
      id: req.body.id,
    },
  });
  if (data == null) {
    res.status(418).json({ error: "Invalid user" });
    res.end();
  } else {
    res.status(200).json(data);
    res.end();
  }
}
