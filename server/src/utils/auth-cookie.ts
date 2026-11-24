import type { Response } from "express";

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: "lax" as const,
  path: "/",
};

export const setAuthCookie = (res: Response, token: string) => {
  res.cookie("access_token", token, {
    ...cookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const setRegistrationCookie = (res: Response, token: string) => {
  res.cookie("registration_token", token, {
    ...cookieOptions,
    maxAge: 10 * 60 * 1000,
  });
};

export const clearRegistrationCookie = (res: Response) => {
  res.clearCookie("registration_token", cookieOptions);
};
