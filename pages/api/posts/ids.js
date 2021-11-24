import { getAllPostIds } from "../../../lib/posts";

export default function handler(req, res) {
  const data = getAllPostIds();
  res.status(200).json(data);
}
