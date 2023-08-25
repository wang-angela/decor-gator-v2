type User = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
};

interface Token {
  name: string;
  exp: number;
}
