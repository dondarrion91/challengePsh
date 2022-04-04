import express from "express";
import cors from "cors";
import "./src/utils/jobs";
import router from "./src/routes/index";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/v1", router);

app.listen("8081", () => {
  console.log("Server is running on port 8081");
});
