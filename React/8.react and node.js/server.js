const http = require("node:http");

const host = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  //console.log(req);

  const { url, method } = req;
  if (url === "/" && method === "GET") {
    //res.write("Welcome to node js");
    //res.write("This is another line");
    res.end("hello,welcome to nodejs"); //indicates end of response
    //--now the client browser
    //will get the response
  }
});

server.listen(port, host, () => {
  //callback fn is called server has started
  console.log(`Server is  running on ${host}:${port}`);
});
