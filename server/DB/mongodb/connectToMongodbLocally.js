const mongoose = require("mongoose");
const chalk = require("chalk");


mongoose
  .connect("mongodb://localhost:27017/Digimon_Web")
  .then(() => console.log(chalk.magentaBright("connected to MongoDb Locally!")))
  .catch(error =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
