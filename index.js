import express from "express";
import cors from "cors";
import "./src/utils/jobs";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi There");
});

app.listen("8081", () => {
    console.log("Server is running on port 8081");
});