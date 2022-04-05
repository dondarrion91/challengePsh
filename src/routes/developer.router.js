import { getDevelopers } from "../controllers/developer.controller";

const initDeveloperRouter = (router) => {
  router.get("/developer", getDevelopers);

  return router;
};

export default initDeveloperRouter;
