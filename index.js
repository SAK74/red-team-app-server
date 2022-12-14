const app = require("express")();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: true //["http://localhost:3000", "http://192.168.0.56:3000"]
};

app.use(cors(corsOptions));
app.all("/", (req, res) => {
  try {
    res.status(200).send("ok");
  } catch (err) {
    res.status(500).send("Server error");
  }
});
app.use("/login", require("./routes/login"));

app.listen(PORT, () => console.log(`App listening in port ${PORT}`));
