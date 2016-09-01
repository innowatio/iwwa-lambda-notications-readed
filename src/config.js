import dotenv from "dotenv";

dotenv.load({silent: true});

export const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/test";
export const NOTIFICATION_COLLECTION_NAME = "notifications";
export const LOG_LEVEL = process.env.LOG_LEVEL || "info";
