import { FC } from "react";
import { Channel } from "@chamster/chamster/models";
import "./channels-list.css";

export const Channels: FC = () => {
  const channels: Channel[] = [
    {
      id: "1",
      name: "hi",
      description: "hi",
    },
  ];
  const selected: Channel = {
    id: "",
    description: "",
    name: "",
  };
  const onSelect = (channel: Channel) => {
    //TODO
  };

  return (
    <div className="channels">
      <h3 className="channels__title">Hamster Chat</h3>
      <h6 className="channels__subtitle">Available channels</h6>
      {channels.map((channel) => (
        <div
          key={channel.id}
          className={`channels__item ${selected.id === channel.id && "active"}`}
          onClick={() => onSelect(channel)}
        >
          <div className="channels__avatar green">#</div>
          <div className="channels__name">{channel.name}</div>
        </div>
      ))}
    </div>
  );
};
