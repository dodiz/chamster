import { FC } from "react";
import { Chat } from "../Chat";
import { Homepage } from "../Homepage";
import { ToastContainer } from "../ui";

import "./app.css";

export const App: FC = () => {
  return (
    <>
      <ToastContainer />
      <Chat />
    </>
  );
};
