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
  messages.push("Joined the room");
  this.setState({ messages });
};
ws.onmessage = ({ data }) => {
  
};
*/

export const chatService = {
  async send(content: string) {
    return {
      id: "",
      user: { id: "123", username: "ciao", email: "", role: "user" },
      content,
      date: new Date(Date.now()),
    };
  },
};
