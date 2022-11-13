import users from "../dev-data/users.json";

export const usersService = {
  async getAll() {
    return users;
  },
};
