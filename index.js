// const express = require("express");
// const app = express();
// const port = 3000;////

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log('hi');
// });

const express = require("express");
const cors = require("cors");
const { json } = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5008;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world from start");
});
const users = [
  { id: 1, name: "nasir", email: "nasir@gmail.com", phone: "0234533" },
  { id: 2, name: "waleed", email: "waleed@gmail.com", phone: "12345678" },
  { id: 3, name: "ridoy", email: "ridoy@gmail.com", phone: "12345678" },
  { id: 4, name: "emon", email: "emon@gmail.com", phone: "12345678" },
  { id: 5, name: "jakir", email: "jakir@gmail.comdsdlsdk", phone: "12345678" },
];
app.get("/users", (req, res) => {
  console.log("query: ", req.query);
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) => user.name.includes(search));
    res.send(matched);
  } else {
    req.send(users);
  }
  res.send(users);
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request: ", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("testing node mon");
});
