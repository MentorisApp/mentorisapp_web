import { type AxiosRequestConfig } from "axios";
import { apiClient } from "./apiClient";

// GET method
export const GET = <TResponse>(route: string, config?: AxiosRequestConfig<TResponse>) => {
  return async ({ signal }: { signal: AbortSignal }) => {
    const { data } = await apiClient.get<TResponse>(route, { signal, ...config });
    return data;
  };
};

// POST method
// used in QUERY hook creation
export const POSTQ = <TRequest, TResponse>(
  route: string,
  payload: TRequest,
  config?: AxiosRequestConfig<TResponse>
) => {
  return async () => {
    const { data } = await apiClient.post<TResponse>(route, payload, config);
    return data;
  };
};

// POST method
// used in MUTATION hook creation
export const POST = <TRequest, TResponse>(
  route: string,
  config?: AxiosRequestConfig<TResponse>
) => {
  return async (payload: TRequest) => {
    const { data } = await apiClient.post<TResponse>(route, payload, config);
    return data;
  };
};

// PUT method
export const PUT = <TRequest, TResponse>(route: string, config?: AxiosRequestConfig<TResponse>) => {
  return async (payload: TRequest) => {
    const { data } = await apiClient.put<TResponse>(route, payload, config);
    return data;
  };
};

// DELETE method
export const DELETE = <TResponse>(route: string, config?: AxiosRequestConfig<TResponse>) => {
  return async () => {
    const { data } = await apiClient.delete<TResponse>(route, config);
    return data;
  };
};
