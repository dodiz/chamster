import { FC, FormEvent, useState } from "react";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import { Link } from "../ui/Link/Link";

interface Props {
  onSwitch: () => void;
}

export const Signup: FC<Props> = ({ onSwitch }) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //await auth?.signup(email, username, password);
  };

  return (
    <form className="form centered" onSubmit={handleSubmit}>
      <h2 className="form-title">Registrati</h2>
      <Input
        type="text"
        name=""
        value={email}
        title="Email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        type="text"
        name=""
        value={username}
        title="Username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <Input
        type="password"
        name=""
        value={password}
        title="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <Button label="Registrati" />

      <Link action={onSwitch}>Already have an account? Login</Link>
    </form>
  );
};
