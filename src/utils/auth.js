import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const getToken = (email) => {
  return jwt.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: { email } },
    process.env.SECRET
  );
};

export const hashPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};

export const checkPassword = (password, userPassword) => {
  return bcryptjs.compareSync(password, userPassword);
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};
