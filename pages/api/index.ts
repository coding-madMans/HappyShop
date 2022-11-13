import { NextApiRequest, NextApiResponse } from "next";

export default async function get(req: NextApiRequest, res: NextApiResponse){
  console.log("api")
  // res.status(200)
  res.json({
    hello: "horld"
  });
  res.end();
}
