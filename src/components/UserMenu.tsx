import { useLogout } from "@/api/endpoints/auth.endpoints";
import { Button } from "./button/Button";

interface UserMenuProps {
  user: User | null;
}

export const UserMenu = ({ user }: UserMenuProps) => {
  // TODO isPending state show loader
  const { mutate: logoutRequest, isPending } = useLogout({
    onSuccess: () => {
      window.location.reload();
    },
  });

  if (user) {
    return (
      <div className="flex items-center gap-x-2 sm:order-3">
        <Button onClick={() => logoutRequest()} severity="error" variant="solid" size="small">
          Odjava
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-2 sm:order-3">
      <Button to="/signup" severity="secondary" variant="solid" size="small">
        Registracija
      </Button>
      <Button to="/login" severity="primary" variant="solid" size="small">
        Prijava
      </Button>
    </div>
  );
};
