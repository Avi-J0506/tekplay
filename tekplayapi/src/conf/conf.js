import dotenv from "dotenv"
dotenv.config();
const env = process.env.ENV || "development";

const config = {
  development: {
    env,
    database: 'mongodb://admin:password@localhost:27017/tekplay',
    PORT: 3000,
    jwtkey:"hellodarknessmyoldfriend",
  },
  production: {
    database: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    jwtkey:process.env.JWTKEY
  },
};

export default config[env];
