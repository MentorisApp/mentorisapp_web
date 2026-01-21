import { useLogout } from "@/api/endpoints/auth.endpoints";
import { useCallback, useEffect, useState } from "react";

const ACCESS_TOKEN_KEY = "access_token";

export function useTokenHandler() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const { mutate: logoutRequest, isPending } = useLogout({
    onSuccess: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      setAccessToken(null);
    },
  });

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = useCallback((token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    setAccessToken(token);
  }, []);

  const logout = useCallback(() => {
    logoutRequest();
  }, []);

  return {
    accessToken,
    isLoggingOut: isPending,
    isAuthenticated: Boolean(accessToken),
    login,
    logout,
  };
}
