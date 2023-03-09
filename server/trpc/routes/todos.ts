import { z } from "zod";
import { prisma } from "~~/server/db/prisma";
import { publicProcedure, router } from "../trpc";

export const todosRoute = router({
  create: publicProcedure
    .input(
      z.object({
        todo: z.string(),
        deadline: z.string(),
        status: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const todo = await prisma.todos.create({
        data: { ...input, deadline: new Date(input.deadline) },
      });
      return {
        todo,
      };
    }),
  findAll: publicProcedure.query(async () => await prisma.todos.findMany({})),
});
