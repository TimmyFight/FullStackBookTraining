import http from "http";

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Welcome World!");
});

const port = 8000;
server.listen(port, () => {
  console.log("Server is runing.");
});
