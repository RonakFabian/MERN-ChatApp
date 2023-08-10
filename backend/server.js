express = require("express");
dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Port listening to ${5000}`));
