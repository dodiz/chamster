import { FC } from "react";
import "./spinner.css";

interface SpinnerProps {
  big?: boolean;
  light?: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ big, light }) => {
  return (
    <div className="spinner-container">
      <div
        className={`spinner ${big ? "spinner--big" : ""} ${
          light ? "spinner--light" : ""
        }`}
      />
    </div>
  );
};
