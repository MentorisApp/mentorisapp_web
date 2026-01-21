import { useTokenHandler } from "@/hooks/useTokenHandler";
import { Button } from "./button/Button";

export const UserMenu = () => {
  const { isAuthenticated, logout } = useTokenHandler();

  //   TODO loading button when logging out or loading screen
  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-x-2 sm:order-3">
        <Button onClick={logout} severity="error" variant="solid" size="small">
          Odjava
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-2 sm:order-3">
      <Button to="/login" severity="secondary" variant="solid" size="small">
        Prijava
      </Button>
    </div>
  );
};
