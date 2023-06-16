import { Schema, Types, model, Model } from "mongoose";
import { Auth } from "../interface/auth.interface";

const UserSchema = new Schema<Auth>(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      default: "Hi i am the description!",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
