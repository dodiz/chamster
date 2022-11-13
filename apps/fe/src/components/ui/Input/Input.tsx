import { ChangeEvent, FC } from "react";

interface InputProps {
  name?: string;
  title: string;
  value: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  name,
  title,
  value,
  type = "text",
  onChange,
}) => {
  return (
    <label className="form-group">
      <h3 className="form-label">{title}</h3>
      <input
        onChange={(e) => onChange(e)}
        className="form-input"
        type={type}
        name={name}
        value={value}
      />
    </label>
  );
};
