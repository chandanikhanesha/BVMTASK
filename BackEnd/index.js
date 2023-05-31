const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();
// `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.CLUSTERNAME}.ghve6qv.mongodb.net/${process.env.DBNAME}`,

mongoose
  .connect(
    "mongodb+srv://user:HrRsmUikMxLemVZH@cluster0.ghve6qv.mongodb.net/Test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to mongo.");
  })
  .catch((err) => {
    console.log("Error connecting to mongo.", err);
  });
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api", require("./routes/router.js"));
app.listen(3002, () => {
  console.log(`server in on 3002`);
});
