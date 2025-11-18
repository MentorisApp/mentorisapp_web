import { QueryClient, type QueryClientConfig } from "@tanstack/react-query";

const queryClientConfig: QueryClientConfig = {
  defaultOptions: { queries: { staleTime: 300000, retry: false } },
};

export const queryClient = new QueryClient(queryClientConfig);
