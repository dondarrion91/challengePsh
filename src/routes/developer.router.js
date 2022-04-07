// Controllers
import { getDevelopers } from "../controllers/developer.controller";

// Middlewares
import { authMiddleware } from "../middlewares/auth.middleware";

const initDeveloperRouter = (router) => {
  router.get("/developer", authMiddleware, getDevelopers);

  return router;
};

export default initDeveloperRouter;
