import cron from "node-cron";
import { createHackaton } from "./createHackaton";

// Job to create a new hackaton every 5 minutes
cron.schedule("0 */5 * * * *", () => {
  console.log("Running job at " + new Date().toUTCString());
  createHackaton();
});

export default {
  cron,
};
