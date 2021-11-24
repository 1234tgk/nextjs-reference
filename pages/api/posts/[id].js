import { getPostData } from "../../../lib/posts";

export default async function handler(req, res) {
  const { id } = req.query;
  const data = await getPostData(id);
  res.status(200).json(data);
}
