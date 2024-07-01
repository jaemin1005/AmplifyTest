import express from "express";

const app = express();
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Amplify Test");
  console.log("http://localhost:3000");
})