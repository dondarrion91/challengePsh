// Controllers
import { getHackatons } from "../controllers/hackaton.controller";

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware";

const initHackatonRouter = (router) => {
  router.get("/hackaton", authMiddleware, getHackatons);

  return router;
};

export default initHackatonRouter;
