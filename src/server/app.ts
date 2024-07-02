import express from "express";

const app = express();
// app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("안녕하세요");
})

app.listen(3000, () => {
  console.log("Amplify Test");
  console.log("http://localhost:3000");
})