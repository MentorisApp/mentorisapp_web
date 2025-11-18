import { useMutation } from "@tanstack/react-query";
import type { UseMutationOptions } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";
import { DELETE, POST, PUT } from "./config/apiMethods";

type MutationOptions<TRequest, TResponse> = Omit<
  UseMutationOptions<TResponse, Error, TRequest>,
  "mutationFn" | "mutationKey"
>;

type CreateQueryHookParams<TRequest, TResponse> = {
  method: "PUT" | "POST" | "DELETE";
  url: string | ((payload: TRequest) => string);
  mutationKey?: [...(string | number)[]];
  axiosRequestConfig?: AxiosRequestConfig<TResponse>;
  mutationOptions?: MutationOptions<TRequest, TResponse>;
  // isFormData?: boolean;
};

const createMutationHook = <TRequest, TResponse>({
  method,
  url,
  mutationKey,
  axiosRequestConfig,
  mutationOptions: baseMutationOptions,
  // TODO
  // isFormData = false,
}: CreateQueryHookParams<TRequest, TResponse>) => {
  return (overrideOptions?: MutationOptions<TRequest, TResponse>) => {
    // Apply multipart transformation only for applicable methods (POST,PUT)
    // TODO
    // const shouldTransformToFormData = isFormData && (method === 'POST' || method === 'PUT');

    const config: typeof axiosRequestConfig = {
      ...axiosRequestConfig,
      // ...(shouldTransformToFormData && {
      // transformRequest: [(data) => transformToFormData(data)],
      // }),
      headers: {
        ...axiosRequestConfig?.headers,
        // ...(shouldTransformToFormData && { 'Content-Type': undefined }),
      },
    };

    // Build query function based on method argument
    const mutationFn = (payload: TRequest) => {
      const endpointUrl = typeof url === "function" ? url(payload) : url;

      switch (method) {
        case "POST":
          return POST<TRequest, TResponse>(endpointUrl, config)(payload);

        case "PUT":
          return PUT<TRequest, TResponse>(endpointUrl, config)(payload);

        case "DELETE":
          return DELETE<TResponse>(endpointUrl, config)();

        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
    };

    // Merge mutation options in layer order from hook creation and hook call
    const mergedMutationOptions = {
      ...baseMutationOptions,
      ...overrideOptions,
    };

    return useMutation({
      mutationKey,
      mutationFn,
      ...mergedMutationOptions,
    });
  };
};

export { createMutationHook };
