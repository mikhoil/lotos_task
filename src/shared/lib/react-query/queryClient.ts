import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
}

export const queryClient = new QueryClient()