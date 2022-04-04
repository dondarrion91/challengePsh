const initTestRouter = (router) => {
  router.get("/test", async (req, res) => {
    res.send("Test route");
  });

  return router;
};

export default initTestRouter;
