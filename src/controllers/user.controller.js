import { Users } from "../../models";
import { getToken, hashPassword, checkPassword } from "../utils/auth";
const Hour = 3600000;

const serverErrorMessage = (error) => {
  return {
    message:
      error.type === "unique violation"
        ? `The user with email ${error.value} already exists`
        : "Internal Server Error",
    status: "Error",
    code: 500,
  };
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hash = hashPassword(password);

    await Users.create({ email, password: hash });

    const token = getToken(email);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + Hour),
        secure: false,
        httpOnly: true,
      })
      .json({
        message: `User with ${email} created`,
        status: "OK",
        code: 200,
      });
  } catch (error) {
    console.log(error)
    res.status(403).json(serverErrorMessage(error.errors[0]));
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(404).json({
        message: "User Not Found, please try again...",
        status: "Not Found",
        code: 404,
      });
    }

    const passwordIsCorrect = checkPassword(password, user.password);

    if (!passwordIsCorrect) {
      res.status(401).json({
        message: "Incorrect password, please try again...",
        status: "Unauthorized",
        code: 401,
      });
    }

    const token = getToken(email);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + Hour),
        secure: process.env.NODE_ENV !== "development",
        httpOnly: true,
      })
      .json({
        message: `User with ${email} logged in`,
        status: "OK",
        code: 200,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      status: "Error",
      code: 500,
    });
  }
};
