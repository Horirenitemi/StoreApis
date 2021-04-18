const express = require("express");
const mongoose = require("mongoose");
const api = require("./Routes/api");
const app = express();
const port = process.env.PORT || 2100;
const environment = process.env.environment || 'local';
const db_connection = {
  local : "mongodb://localhost/store",
  production: `mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}/${process.env.db_name}?retryWrites=true&w=majority`
}[environment];
mongoose
  .connect(db_connection, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Local database is now connected...!");
  });

app.use(express.json());
app.use("/", api);

app.listen(port, () => {
  console.log(`${port}`);
});
