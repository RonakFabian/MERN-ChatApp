express = require("express");
dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Port listening to ${5000}`));
