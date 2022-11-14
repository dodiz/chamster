import { Channel } from "@chamster/models";
/*
import SockJS from "sockjs-client";
const ws = new SockJS("http://localhost:8080/ws");
ws.onopen = () => {
  console.log("Socket opened");
  ws.send("Hi");
  ws.send("Hello");
};
ws.onopen = () => {
  const messages = [...this.state.messages];
  messages.push("Joined the channel");
  this.setState({ messages });
};
ws.onmessage = ({ data }) => {
  
};
*/

const channels: Channel[] = [
  {
    id: "1",
    name: "Channel",
    description: "Description",
  },
];

export const channelService = {
  getAll: async () => channels,
};
