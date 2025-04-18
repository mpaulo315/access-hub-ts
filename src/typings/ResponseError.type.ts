import { z } from "zod";

export type ResponseError = {
  message: string;
  status: number;
  className: string;
};

const ResponseErrorSchema = z.object({
  message: z.string(),
  status: z.number(),
  className: z.string(),
});

export const isResponseError = (error: unknown): boolean => {
  return ResponseErrorSchema.safeParse(error).success;
};
