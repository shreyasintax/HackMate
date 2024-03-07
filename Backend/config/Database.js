const mongoose=require("mongoose")

exports.connect = (MONGO_URL) => {
    mongoose.connect(MONGO_URL)
        .then(() => {
            console.log("DB Connection Succesful")
        })
        .catch((err) => {
            console.log("DB Connection Successful");
            console.error(err);
            process.exit(1);
        })
}