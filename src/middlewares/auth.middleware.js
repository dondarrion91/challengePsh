import { verifyToken } from "../utils/auth";

const authErrorResponseMessage = {
  message: "Unauthorized",
  status: "Authorization error",
  code: 401,
};

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(401).json(authErrorResponseMessage);
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json(authErrorResponseMessage);
  }
};
