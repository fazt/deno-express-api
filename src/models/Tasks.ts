import { Schema, model } from "npm:mongoose";

const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default model("Task", taskSchema);
