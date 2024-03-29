import dotenv from "dotenv"
dotenv.config();
const env = process.env.ENV || "development";

const config = {
  development: {
    env,
    database: 'mongodb+srv://admin:admin@test.mjgwyq8.mongodb.net/tekplay?retryWrites=true&w=majority',
    PORT: 3001,
    jwtkey:"hellodarknessmyoldfriend",
  },
  production: {
    database: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    jwtkey:process.env.JWTKEY
  },
};

export default config[env];
