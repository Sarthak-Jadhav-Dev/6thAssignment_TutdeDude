const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup EJS for rendering
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files (optional, for CSS/JS/images)
app.use("/static", express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { backendUrl: BACKEND_URL });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Frontend running at http://localhost:${PORT}`);
  console.log(`➡️  Sending form data to backend at ${BACKEND_URL}`);
});
