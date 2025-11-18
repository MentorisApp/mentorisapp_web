import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../api/config/queryClient";
import type { PropsWithChildren } from "react";

// Used for wrapping react islands to inject tanstack query context
export const IslandWrapper = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
