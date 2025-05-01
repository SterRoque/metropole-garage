import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().optional(),
});

const _env = envSchema.safeParse(process.env);

export const env = _env.data;
