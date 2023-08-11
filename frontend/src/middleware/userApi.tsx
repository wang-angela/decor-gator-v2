import axios from "axios";

export async function getUser(name: String) {
  const response = await axios.get("http://localhost:8080/user/" + name);

  return response.data;
}

export function createUser(user: User) {
  axios
    .post("http://localhost:8080/user", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
