const { default: axios } = require("axios");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

//enable app to use
dotenv.config();

//enable json responses
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.post("/", async (req, res) => {
  const category = req.body.category;
  try {
    const result = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=4kTUikP2ty8GJaOfPDGVlF3Yp0XRkKEV`
    );
    res.send(result.data.results);
  } catch (error) {
    res.send(error);
  }
});

app.listen(400, () => {
  console.log("express app is running");
});
