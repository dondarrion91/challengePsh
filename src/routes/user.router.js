import { register, login } from "../controllers/user.controller";

const initUserRouter = (router) => {
  router.post("/login", login);

  router.post("/register", register);

  return router;
};

export default initUserRouter;
