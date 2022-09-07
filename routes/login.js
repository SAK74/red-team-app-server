const router = require('express').Router();
const base64decode = require("../services/base64decode");
require("dotenv").config();

router.get((req, resp) => {
   if (!req.headers.authorization) {
      resp.status(401).send("Wrong authorization method");
   } else {
      const [auMethot, auData] = req.headers.authorization.split(" ");
      if (auMethot !== "Basic") {
         resp.status(401).send("Wrong authorization method");
      }
      else {
         const [user, passw] = base64decode(auData);
         console.log(user, passw);
         if (match = passw === process.env.APP_PASSWORD) {
            resp.cookie("token", "sometoken", { httpOnly: true });
         }
         resp.send(match ? user : "").end();
      }
   }
});
module.exports = router;