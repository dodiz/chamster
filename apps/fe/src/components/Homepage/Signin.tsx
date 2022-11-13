import { FC, FormEvent, useState } from "react";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { Link } from "../ui/Link/Link";

interface Props {
  onSwitch: () => void;
}

export const Signin: FC<Props> = ({ onSwitch }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //await auth?.login(email, password);
  };

  return (
    <form className="form centered" onSubmit={handleSubmit}>
      <h2 className="form-title">Login</h2>
      <Input
        type="text"
        name=""
        value={email}
        title="Email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        type="password"
        name=""
        value={password}
        title="Password"
        onChange={({ target }) => setPassword(target.value)}
      />

      <Button label="Login" />
      <Link action={onSwitch}>
        <div>Need an account? Signup</div>
      </Link>
    </form>
  );
};
