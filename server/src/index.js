const app = require("express")();
const cors = require("cors");

const PORT = process.env.PORT || 4000;
const corsOptions = {
  origin: true, //["http://localhost:3000", "http://192.168.0.56"]
};
app.use(cors(corsOptions));

app.all("/", (req, res) => {
  res.status(200).json({ test: "something" });
});
app.listen(PORT, () => console.log(`App listening in port ${PORT}`));
