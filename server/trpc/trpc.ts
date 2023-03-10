import { initTRPC } from "@trpc/server";
import { Context } from "~/server/trpc/context";

const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;
export const middleware = t.middleware;
export const router = t.router;
