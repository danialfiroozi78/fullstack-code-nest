import "dotenv/config";
import app from "./app";
import { connectDB } from "./config/db.config";
import { connectRedis } from "./config/redis.config";

const startServer = async () => {
  try {
    await connectDB();
    await connectRedis();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT} 👍`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
