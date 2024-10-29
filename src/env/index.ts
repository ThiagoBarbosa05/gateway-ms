import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  RESTAURANT_API_URL: z.string().default("http://localhost:8080"),
  AUTH_API_URL: z.string().default("http://localhost:3001"),
  STORE_API_URL: z.string().default("http://localhost:3000"),
  DELIVERY_API_URL: z.string().default("http://localhost:3002"),
});

export const env = envSchema.parse(process.env);
