const express = require("express");
const app = express(); //basically this is function express() that we require

//app is basically an object , we can access properties

//console.dir(app); // this is to call inside app

const port = 3000;

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

//listen is a method which listen incoming API request
//Ports : They are logical endpoints of a network connection that is used to exchange information between a web server and a web client.

//Sending a response
app.use((request, response) => {
  response.send("response send");
  console.log("request recieved");
});

//Routing : It is the process of selecting a path for traffic in a network or between or across multiple networks
//app.get();
//app.post();

/*What is Templating?
EJS(Embedded Javascript templates)
EJS is a simple templating language that lets you generate HTML markup with plain javascript*/

//Interpolation Syntax:This refers to embedding expressions into marked up text.
