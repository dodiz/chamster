import { useState, useRef } from "react";
import { Reply } from "../Reply";
import { Message } from "../../../models/Message";
import { chatService } from "../../../services/chat.service";

import "./channel.css";

export const Channel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);

  const channel = {
    name: "channel name",
    description: "channel description",
  };

  const handleNewMessage = async (content: string) => {
    const newMessage = await chatService.send(content);
    setMessages((p) => [...p, newMessage]);
    if (messagesRef.current !== null)
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
  };

  return (
    <div className="channel">
      <div className="channel__nav">
        <h3 className="channel__title">{channel.name}</h3>
        <div className="channel__description">{channel.description}</div>
      </div>
      <div className="channel__messages" ref={messagesRef}>
        {messages.map((m) => (
          <div key={m.id} className="channel__message">
            <div className="channel__message-top">
              {m.user.username} - {m.date.getTime()}
            </div>
            {m.content}
          </div>
        ))}
      </div>
      <Reply onSend={handleNewMessage} />
    </div>
  );
};
