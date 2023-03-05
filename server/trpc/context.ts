import { PrismaClient } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";

let prisma: PrismaClient | undefined;

const getSession = () => {
  return new Promise((resolve) => {
    resolve("");
  });
};

export const createContext = async () => {
  if (!prisma) prisma = new PrismaClient();

  const session = await getSession();
  return {
    session,
    prisma,
  };
};

export type Context = inferAsyncReturnType<typeof createContext>;
