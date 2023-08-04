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
