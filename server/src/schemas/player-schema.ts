import { z } from "zod";

export const createPlayerSchema = z.object({
  name: z.string().min(1),
  steam_id: z.string().min(1),
});

export type TCreatePlayerSchema = z.infer<typeof createPlayerSchema>;
