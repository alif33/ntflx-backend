require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reactionRoutes = require("./routes/reactionRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const surveyRoutes = require("./routes/surveyRoutes");


const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => console.log("✅ Connected to MongoDB"));
db.on("error", (err) => console.error("❌ MongoDB connection error:", err));

app.use("/reaction", reactionRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/survey", surveyRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
