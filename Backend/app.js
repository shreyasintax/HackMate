const express = require("express");
const app = express();
const { connect } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const userRoutes = require("./routes/User");
const oppoRoutes = require("./routes/Opportunity");
const teamRoutes = require("./routes/Team");
require("dotenv").config();
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    // credentials: true,
  })
)

app.use("/hackmate/v1/user", userRoutes); 
app.use("/hackmate/v1/opportunity", oppoRoutes); 
app.use("/hackmate/v1/team", teamRoutes); 

app.get("/",(req,res)=>{
    res.send("Server is running!");
})
const start = async () => {
    try {
        await connect(MONGO_URL);
        cloudinaryConnect(); // cloudinary config
        app.listen(PORT, () => {
            console.log("Server is listening at " + PORT);
        });
    } catch (error) {
        console.error("Error starting the server:", error.message);
    }
};

start();
