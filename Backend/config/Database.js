const mongoose=require("mongoose")
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("DB Connection Succesful")
        })
        .catch((err) => {
            console.log("DB Connection Successful");
            console.error(err);
            process.exit(1);
        })
}