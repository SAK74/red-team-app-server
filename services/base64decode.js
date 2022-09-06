function base64decode(param) {
   if (!param) {
      return undefined;
   }
   const buff = new Buffer.from(param, "base64");
   const decoded = buff.toString("ascii").split(":");
   console.log("decoded: ", decoded);
   return decoded;
}

module.exports = base64decode;