import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
