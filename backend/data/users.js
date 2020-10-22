import bcrypt from "bcryptjs";

const users = [
  {
    name: "Jacob",
    email: "admin@mail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nati",
    email: "Nati@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John",
    email: "john@mail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
