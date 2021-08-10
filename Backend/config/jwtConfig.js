import JWT from "jsonwebtoken";
export const generateToken = (user) => {
  const { _id, username, email, fullname } = user;
  return JWT.sign({ _id, username, email, fullname }, "mysecrettext", {
    expiresIn: "7d",
  });
};

// authorization : Bearer fahjhrq234rkj3q2brjkq324h3o24j2io32j12j

export const isAuthenticated = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    // JWT token is found
    const token = authorization.split(" ")[1];
    JWT.verify(token, "mysecrettext", (err, decode) => {
      if (!err) {
        req.user = decode;

        next();
      } else {
        res.status(401).json(err.message);
      }
    });
  } else {
    // token not found
    res.status(401).json({ message: "Authorization is required" });
  }
};
