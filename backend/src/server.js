require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 3001;

app
  .listen(port, () => {
    console.log(`Server is up.\nListening to port http://localhost:${port}`);
  })
  .on("error", (err) => {
    console.log("Server failed to start: ", err.message);
  });
