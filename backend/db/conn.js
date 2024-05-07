const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://Hickys:T08k4dYS18f1kgSE@cluster0.kwu7bqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado no banco!")
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
