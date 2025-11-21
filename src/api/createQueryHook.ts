import { GET, POSTQ } from "./config/apiMethods";
import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";

type QueryOptions<TResponse> = Omit<UseQueryOptions<TResponse, Error>, "queryFn" | "queryKey">;

type CreateQueryHookParams<TRequest, TResponse> = {
  method: "GET" | "POST";
  url: string | ((payload: TRequest) => string);
  queryKey: (payload: TRequest) => [...(string | number)[]];
  axiosRequestConfig?: AxiosRequestConfig<TResponse>;
  queryOptions?: QueryOptions<TResponse>;
};

const createQueryHook = <TRequest, TResponse>({
  method,
  url,
  queryKey,
  axiosRequestConfig,
  queryOptions: baseQueryOptions,
}: CreateQueryHookParams<TRequest, TResponse>) => {
  return (payload: TRequest, overrideQueryOptions?: QueryOptions<TResponse>) => {
    const cacheKey = queryKey ? queryKey(payload) : [];
    const queryFn = (() => {
      const endpointUrl = typeof url === "function" ? url(payload) : url;

      switch (method) {
        case "GET":
          return GET<TResponse>(endpointUrl, axiosRequestConfig);

        case "POST":
          return POSTQ<TRequest, TResponse>(endpointUrl, payload, axiosRequestConfig);

        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
    })();

    const mergedQueryOptions = {
      ...baseQueryOptions,
      ...overrideQueryOptions,
    };

    return useQuery({
      queryKey: cacheKey,
      queryFn,
      ...mergedQueryOptions,
    });
  };
};

export { createQueryHook };
