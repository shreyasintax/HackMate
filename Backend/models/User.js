const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide first name"],
      minLength: 2,
      maxLength: 50,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please provide last name"],
      minLength: 1,
      maxLength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email address"],
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    accountType: {
      type: String,
      enum: ["Admin", "Participant", "Organiser"],
      message: "Account Type must either be Admin , Participant or Organiser",
      required: [true, "Please provide account type"],
    },
    // active: {
    //   type: Boolean,
    //   default: true,
    // },
    additionalDetails: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    image: {
      type: String,
    },
    hardSkills: [
      {
        type: String
      }
    ],
    softSkills: [
      {
        type: String
      }
    ],
    links: [
      {
        type: String
      }
    ],
    city:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    pinCode:{
      type:String,
      required:true
    },
    dateOfBirth: {
      type: Date,
      required:true
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      defaultValue: "",
      message:
        "Gender must be either 'Male', 'Female'",
      required:true
    },
    // TODO: LATER
    //reset password token
    token: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10); //10 rounds of salt
  this.password = await bcrypt.hash(this.password, salt);
  /* this.password = await bcrypt.hash(this.password, 10,); */ //or use this one line code
});


// TODO 
UserSchema.methods.comparePassword = async function (LoginPassword) {
  const isMatching = await bcrypt.compare(LoginPassword, this.password);
  return isMatching;
};

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    {
      //TODO: change account type is needed
      id: this._id,
      email: this.email,
      accountType: this.accountType,
    },
    process.env.JWT_SECRET,
    { expiresIn: 5*30}
  );
};

module.exports = model("User", UserSchema);
