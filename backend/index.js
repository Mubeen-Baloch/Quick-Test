// backend/index.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
