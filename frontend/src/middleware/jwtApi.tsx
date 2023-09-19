import axios from "axios";

export async function createAccessToken(username: string, password: string) {
  const res = await axios.post("http://localhost:8080/authenticate", {
    username: username,
    password: password,
  });

  return res.data;
}

export async function createRefreshToken() {
  const res = await axios.post("http://localhost:8080/refresh-token");

  return res.data;
}

export async function verifyToken(token: string) {
  const res = await axios.get("http://localhost:8080/verify", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data;
}
