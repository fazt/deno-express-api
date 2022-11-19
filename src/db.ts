import mongoose from "npm:mongoose";

try {
  const conn = await mongoose.connect("mongodb://localhost/deno-rest-api");
  console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
  console.error(error);
}
