import { getSortedPostsData } from "../../../lib/posts";

export default function handler(req, res) {
  const data = getSortedPostsData();
  res.status(200).json(data);
}
