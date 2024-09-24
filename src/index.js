import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("Mongo DB connection Failed", err);
//   });

const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      conso.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Mongo DB connection Failed", err);
    process.exit(1);
  }
};

startServer();
