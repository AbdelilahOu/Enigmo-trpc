import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { createTodoSchema, updateTodoSchema } from "~~/server/db";
import { publicProcedure, router } from "../trpc";
import * as trpc from "@trpc/server";
import { z } from "zod";

export const todosRoute = router({
  findAll: publicProcedure.query(
    async ({ ctx }) => await ctx.prisma.todos.findMany({})
  ),
  create: publicProcedure
    .input(createTodoSchema)
    // .output()
    .mutation(async ({ input, ctx: { prisma } }) => {
      console.log(input);
      try {
        const todo = await prisma.todos.create({
          data: { ...input, deadline: new Date(input.deadline) },
        });
        return {
          todo,
        };
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code == "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message: "todo already exists",
              cause: "inserting an existing todo",
            });
          }
          return;
        }
        throw new trpc.TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "sth went wrong",
        });
      }
    }),
  update: publicProcedure
    .input(updateTodoSchema)
    .mutation(({ input, ctx: { prisma } }) => {
      const { id, todo } = input;
      return prisma.todos.update({
        where: {
          id,
        },
        data: todo,
      });
    }),
  delete: publicProcedure
    .input(z.number())
    .mutation(({ input: id, ctx: { prisma } }) => {
      return prisma.todos.delete({
        where: {
          id,
        },
      });
    }),
});
