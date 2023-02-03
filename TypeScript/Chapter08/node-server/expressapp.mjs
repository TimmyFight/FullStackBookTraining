import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("First midleware.");
  throw new Error("I am sorry. We have a problem!");
});

app.use(router);

router.get("/a", (req, res, next) => {
  res.send("Route A");
});

router.post("/c", (req, res, next) => {
  res.send(`Route C. I have an message: ${req.body.message}`);
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen({ port: 8000 }, () => {
  console.log("Server Node Express is working!");
});
