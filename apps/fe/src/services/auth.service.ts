import users from "../dev-data/users.json";

const API_URL = "http://localhost:3001/api";

export const authService = {
  async getSession() {
    const response = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        id: 0,
        username: "username",
        email: "Email",
        password: "password",
      }),
    });
    const data = await response.json();
    console.log(data);
    return users[0];
  },
  async login(email: string, password: string) {
    console.log(`logging in with email:${email} and password${password}`);
    return users[0];
  },
  async signup(email: string, username: string, password: string) {
    console.log(
      `signing up with email:${email}, username:${username} and password:${password}`
    );
    return users[0];
  },
  async logout() {
    return;
  },

  async editUsername(username: string) {
    console.log("editing username");
  },
  async editPassword(password: string) {
    console.log("Editing password");
  },
};
