import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://alessandropierini:12345@cluster1.m5ud6h0.mongodb.net/test";
