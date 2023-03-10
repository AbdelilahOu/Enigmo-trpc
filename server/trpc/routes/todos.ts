import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const todosRoute = router({
  findAll: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.todos.findMany({})
  ),
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
  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        todo: z.object({
          todo: z.string().optional(),
          deadline: z.string().optional(),
          status: z.string().optional(),
        }),
      })
    )
    .mutation(({ input, ctx }) => {
      const { id, todo } = input;
      return ctx.prisma.todos.update({
        where: {
          id,
        },
        data: todo,
      });
    }),
  delete: publicProcedure.input(z.number()).mutation(({ input: id, ctx }) => {
    return ctx.prisma.todos.delete({
      where: {
        id,
      },
    });
  }),
});
