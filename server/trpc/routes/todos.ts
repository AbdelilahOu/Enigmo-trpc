import { z } from "zod";
import {
  createTodoSchema,
  updateTodoSchema,
} from "~~/server/db/schema/todo.schema";
import { publicProcedure, router } from "../trpc";

export const todosRoute = router({
  findAll: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.todos.findMany({})
  ),
  create: publicProcedure
    .input(createTodoSchema)
    // .output()
    .mutation(async ({ input, ctx }) => {
      const todo = await ctx.prisma.todos.create({
        data: { ...input, deadline: new Date(input.deadline) },
      });
      return {
        todo,
      };
    }),
  update: publicProcedure.input(updateTodoSchema).mutation(({ input, ctx }) => {
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
