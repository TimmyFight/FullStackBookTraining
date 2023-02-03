import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("First midleware.");
  next();
});

app.use(router);

router.get("/api/v1/users", (req, res, next) => {
  const users = [
    {
      id: 1,
      username: "Tom",
    },
    {
      id: 2,
      username: "John",
    },
    {
      id: 3,
      username: "Hans",
    },
  ];
  console.log(req.query.userid);
  const user = users.find((user) => user.id == req.query.userid);
  res.send(`User name: ${user?.username}`);
});

router.post("/api/v1/groups", (req, res, next) => {
  const groups = [
    {
      id: 1,
      groupname: "Web Developers",
    },
    {
      id: 2,
      groupname: "PHP",
    },
    {
      id: 3,
      groupname: "Java",
    },
  ];
  const group = groups.find((group) => group.id == req.body.groupid);
  res.send(`Group name: ${group?.groupname}`);
});

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
