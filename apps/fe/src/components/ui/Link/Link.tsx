import { FC, ReactNode } from "react";

interface Props {
  action: () => void;
  children: ReactNode;
}

export const Link: FC<Props> = ({ action, children }) => {
  return (
    <span className="link" onClick={action}>
      {children}
    </span>
  );
};
