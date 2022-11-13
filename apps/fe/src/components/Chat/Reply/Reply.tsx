import { FC, useState, FormEvent } from "react";
import "./reply.css";

interface ReplyProps {
  onSend: (message: string) => Promise<void>;
}

export const Reply: FC<ReplyProps> = ({ onSend }) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSend(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="reply">
      <input
        placeholder="Messaggio ..."
        className="reply__input"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button className="btn btn--reply">Invia</button>
    </form>
  );
};
