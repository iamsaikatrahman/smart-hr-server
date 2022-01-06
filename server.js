const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routers
const employeeRouter = require("./routes/employeeRouter");
app.use("/api/employees", employeeRouter);

// Testing API
app.get("/", (req, res) => {
  res.json({ message: "Smart HR server is Running" });
});

app.listen(port, () => {
  console.log(`App listing on http://localhost:${port}`);
});
