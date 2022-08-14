const app = require("express")();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
console.log(process.env);
const corsOptions = {
  origin: true, //["http://localhost:3000", "http://192.168.0.56"]
};
app.use(cors(corsOptions));
// app.use(express.static("public"));
app.all("/", (req, res) => {
  try {
    res.status(200).json({ test: "something" });
  } catch (err) {
    res.status(500).send("Server error");
  }
});
app.listen(PORT, () => console.log(`App listening in port ${PORT}`));
