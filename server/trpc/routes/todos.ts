import { z } from "zod";
import { prisma } from "~~/server/db/prisma";
import { publicProcedure, router } from "../trpc";

export const todosRoute = router({
  create: publicProcedure
    .input(
      z.object({
        todo: z.string(),
        deadline: z.date(),
        status: z.string(),
      })
    )
    .query(async ({ input }) => {
      const todo = await prisma.todos.create({
        data: input,
      });
      return {
        todo,
      };
    }),
});
