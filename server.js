const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  path = require("path"),
  dotenv = require("dotenv"),
  cors = require("cors"),
  work = require("./routes/api/Work");

const whitelist = ["http://localhost:3000"];
app.use(cors());
app.options(whitelist, cors());
dotenv.config();
app.use(express.json({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/work", work);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
