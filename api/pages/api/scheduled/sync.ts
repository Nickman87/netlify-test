import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Do something scheduled
  console.log("Scheduled API called", req);

  return res.status(200).send("OK");
};

export default handler;

export const config = {
  type: "experimental-scheduled",
  schedule: "0 */10 * ? * *", //"5 3 * * *" // Every day at 03:05
};
