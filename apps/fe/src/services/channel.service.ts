import channelsData from "../dev-data/channels.json";
import { Channel } from "../models/Channel";
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

let channels: Channel[] = [...channelsData];

export const channelService = {
  async getAll() {
    return channels;
  },
  async insert(name: string, description: string) {
    const newchannel = { id: Math.random().toString(), description, name };
    channels.push(newchannel);
    return newchannel;
  },
  async remove(id: string) {
    channels = channels.filter((channel: Channel) => channel.id !== id);
  },
  async update(channel: Channel) {
    return null;
  },
};
