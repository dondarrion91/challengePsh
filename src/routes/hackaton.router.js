import { getHackatons } from "../controllers/hackaton.controller";

const initHackatonRouter = (router) => {
  router.get("/hackaton", getHackatons);

  return router;
};

export default initHackatonRouter;
