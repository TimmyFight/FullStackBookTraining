import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome World! System is working.");
  } else if (req.url === "/a") {
    res.end("Welcome on the route A!");
  } else if (req.url === "/b") {
    res.end("Welcome on the route B!");
  } else if (req.url === "/c" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const params = Buffer.concat(body);
      console.log("Content: ", params.toString());
      res.end(`Sended parameters: ${params.toString()}`);
    });
  } else {
    res.end("See you soon!");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log("Server is runing.");
});
