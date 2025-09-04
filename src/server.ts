import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/contact", async (req: Request, res: Response) => {
  const { nome, email, message } = req.body;

  if (!nome || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "Preenche todos os campos." });
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
