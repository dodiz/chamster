import { FC, useState } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export const Homepage: FC = () => {
  const [isSigningIn, setIsSigningIn] = useState(true);

  return isSigningIn ? (
    <Signin onSwitch={() => setIsSigningIn(false)} />
  ) : (
    <Signup onSwitch={() => setIsSigningIn(true)} />
  );
};
