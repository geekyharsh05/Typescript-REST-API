import mongoose, { ConnectOptions } from 'mongoose';

export const dbConnect = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log(`Connected to MongoDB ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
