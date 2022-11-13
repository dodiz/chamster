import React, { FC } from "react";

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <div className="form-group">
      <button className="btn">{label}</button>
    </div>
  );
};
