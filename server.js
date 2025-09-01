
import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.get("/projects", (req, res) => {
  const data = fs.readFileSync("db.json", "utf8") || "[]";
  res.json(JSON.parse(data));
});

app.post("/projects", (req, res) => {
  const projects = JSON.parse(fs.readFileSync("db.json", "utf8") || "[]");
  projects.push(req.body);
  fs.writeFileSync("db.json", JSON.stringify(projects, null, 2));
  res.json({ status: "ok" });
});

app.listen(3001, () => console.log("Backend corriendo en http://localhost:3001"));
