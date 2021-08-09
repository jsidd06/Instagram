import JWT from "jsonwebtoken";
export const generateToken = (user) => {
  const { _id, username, email, fullname, password } = user;
  return JWT.sign({ _id, username, email, fullname }, "mysecrettext", {
    expiresIn: "7d",
  });
};
