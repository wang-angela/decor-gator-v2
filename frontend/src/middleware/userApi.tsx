import axios from "axios";
import { useEffect, useState } from "react";

export function getUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user["id"]}>{user["email"]}</li>
      ))}
    </ul>
  );
}

export function createUser(newUser: User) {
  axios
    .post("http://localhost:8080/user", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
