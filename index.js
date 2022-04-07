import express from "express";
import cors from "cors";
import "./src/utils/jobs";
import router from "./src/routes/index";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1", router);

app.listen("8081", () => {
  console.log("Server is running on port 8081");
});

export default app;
