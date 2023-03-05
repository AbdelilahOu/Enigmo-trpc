import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import type { AppRouter } from "~/server/trpc/routes";

export default defineNuxtPlugin(() => {
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "/api/trpc",
      }),
    ],
  });

  return {
    provide: {
      client,
    },
  };
});
