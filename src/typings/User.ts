import * as zod from "zod";

export const RegisterUserZod = zod.object({
  username: zod.string().nonempty().min(8, "Username must be at least 8 characters long"),
  password: zod
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long")
    .refine(
      (pwd) => /[A-Z]/.test(pwd),
      "Password must contain at least one uppercase letter"
    )
    .refine(
      (pwd) => /[a-z]/.test(pwd),
      "Password must contain at least one lowercase letter"
    )
    .refine(
      (pwd) => /[0-9]/.test(pwd),
      "Password must contain at least one number"
    )
    .refine(
      (pwd) => /[!@#$%^&*]/.test(pwd),
      "Password must contain at least one special character"
    ),
});

export type RegisterUser = zod.infer<typeof RegisterUserZod>;

export const LoginUserZod = zod.object({
  username: zod.string().min(8, "Username must be at least 8 characters long"),
  password: zod
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long"),
});

export type LoginUser = zod.infer<typeof LoginUserZod>;
