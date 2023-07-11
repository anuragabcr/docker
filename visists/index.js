const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
  port: 6379,
});

client.set("visists", 0);

app.get("/", (req, res) => {
  client.get("visists", (err, visists) => {
    res.send(`Number of visists:- ${visists}`);
    client.set("visists", parseInt(visists) + 1);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
