import express from "express";
import _ from "lodash";
const routerObject = express.Router();

// Model routers
import initHackatonRouter from "./hackaton.router";
import initDeveloperRouter from "./developer.router";

const makeRouter = _.flow([initHackatonRouter, initDeveloperRouter]);
const router = makeRouter(routerObject);

export default router;
