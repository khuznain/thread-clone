import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  if (!process.env.MONGOOSE_URL) return console.log("MONGOOSE_URL not found");
  if (isConnected) return console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

// z4tAlGezWnlZ3MQV
// mongodb+srv://khuznain99:<password>@cluster0.ggl2zi0.mongodb.net/?retryWrites=true&w=majority
