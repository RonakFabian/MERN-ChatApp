express = require("express");
dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Port listening to ${5000}`));
