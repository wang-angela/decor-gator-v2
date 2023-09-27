import axios from "axios";

export async function getPosts() {
  const res = await axios.get("http://localhost:8080/posts");

  return res.data;
}
