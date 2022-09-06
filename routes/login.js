const router = require('express').Router();
const base64decode = require("../services/base64decode");

router.use((req, resp) => {
   console.log(process.env);
   const [auMethot, auData] = req.headers.authorization.split(" ");
   // console.log(auMethot, auData);
   if (auMethot !== "Basic") {
      resp.status(401).end();
   } else {
      const [user, passw] = base64decode(auData);
      console.log(user, passw);
      resp.status(200).cookie("token", "sometoken", { httpOnly: true }).send({ token: "bodytoken" });
   }
})
module.exports = router;