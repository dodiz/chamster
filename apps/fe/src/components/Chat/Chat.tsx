import { FC } from "react";
import { Navbar } from "./Navbar";
import { Channels } from "./ChannelsList";
import { Channel } from "./Channel";
import "./chat.css";

export const Chat: FC = () => {
  return (
    <div className="chat">
      <Navbar />
      <Channels />
      <Channel />
    </div>
  );
};
