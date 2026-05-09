import mongoose from "mongoose";

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:admin123@ac-yelefp6-shard-00-00.yhszbsm.mongodb.net:27017,ac-yelefp6-shard-00-01.yhszbsm.mongodb.net:27017,ac-yelefp6-shard-00-02.yhszbsm.mongodb.net:27017/?ssl=true&replicaSet=atlas-297b5z-shard-0&authSource=admin&appName=Ibrahim",
    );
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};

export default conn;
