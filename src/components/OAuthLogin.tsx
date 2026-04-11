import { OAuthButton } from "./OAuthButton";

const OAuthLogin = () => {
  return (
    <div className="flex gap-2">
      <OAuthButton provider="Google" />
      <OAuthButton provider="Facebook" />
    </div>
  );
};

export { OAuthLogin };
