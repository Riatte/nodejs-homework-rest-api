const mongoose = require("mongoose");
const app = require("./app");

const {
  DB_HOST = "mongodb+srv://deja:deja@cluster0.5qfinaf.mongodb.net/?retryWrites=true&w=majority",
  PORT = 3000,
  DB_NAME = "db-contacts",
} = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST, {
    dbName: DB_NAME,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
