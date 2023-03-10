import { z } from "zod";
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
    .mutation(async ({ input, ctx }) => {
      const todo = await ctx.prisma.todos.create({
        data: { ...input, deadline: new Date(input.deadline) },
      });
      return {
        todo,
      };
    }),
  findAll: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.todos.findMany({})
  ),
});
