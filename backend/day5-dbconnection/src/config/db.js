const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aakasharyan355_db_user:cohort-backed12345@cohort-cluster.cfthamd.mongodb.net/",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error in db", error);
  }
};

module.exports = connectDb;
