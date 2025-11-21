import { QueryClientProvider } from "@tanstack/react-query";

import type { PropsWithChildren } from "react";
import { queryClient } from "../api/config/queryClient";

// Used for wrapping react islands to inject tanstack query context
export const IslandWrapper = ({ children }: PropsWithChildren) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
