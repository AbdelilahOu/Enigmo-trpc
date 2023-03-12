import { createTodoSchema, updateTodoSchema } from "~~/server/db";
import { publicProcedure, router } from "../trpc";
import { z } from "zod";
import * as trpc from "@trpc/server";
export const todosRoute = router({
  findAll: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.todos.findMany({})
  ),
  create: publicProcedure
    .input(createTodoSchema)
    // .output()
    .mutation(async ({ input, ctx }) => {
      try {
        const todo = await ctx.prisma.todos.create({
          data: { ...input, deadline: new Date(input.deadline) },
        });
        return {
          todo,
        };
      } catch (error) {
        if (error instanceof trpc.TRPCError) {
          if (error.code == "INTERNAL_SERVER_ERROR") {
            console.log(error);
          }
        }
      }
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
