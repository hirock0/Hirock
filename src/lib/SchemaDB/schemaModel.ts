import mongoose from "mongoose";
import { ConnectionToDB } from "@/connectionDB/connectiondb";
ConnectionToDB();
const ProjectsSchema = new mongoose.Schema({
  nanoId: {
    type: String,
    required: false,
  },
  projectName: {
    type: String,
    required: false,
  },
  projectImage: {
    type: String,
    required: false,
  },
  projectLink: {
    type: String,
    required: false,
  },
  projectTitle: {
    type: String,
    required: false,
  },
  recentDate: {
    type: String,
    required: false,
  },
  dateFeild: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

export const ProjectSchemaData =
  mongoose.models.my_projects || mongoose.model("my_projects", ProjectsSchema);

const SignupData = new mongoose.Schema({
  nanoId: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  emailOrnumber: {
    type: String,
    required: [false, "fill the data"],
  },
  password: {
    type: String,
    required: [false, "fill the data"],
  },

  address: {
    type: String,
    required: [false, "fill the data"],
  },
  image: {
    type: String,
    required: [false, "fill the data"],
  },
  recentDate: {
    type: String,
    required: [false, "fill the data"],
  },
  dateField: {
    type: Date,
    default: Date.now,
    required: [false, "fill the data"],
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
  tokenVerified: Date,
  forgotPassword: String,
  forgotPasswordVerified: Date,
});

export const SignUpSchema =
  mongoose.models.all_user_details ||
  mongoose.model("all_user_details", SignupData);
