import express from "express";
import _ from "lodash";
const routerObject = express.Router();

// Model routers
import initTestRouter from "./test.router";
import initHackatonRouter from "./hackaton.router";

const makeRouter = _.flow([initTestRouter, initHackatonRouter]);
const router = makeRouter(routerObject);

export default router;
