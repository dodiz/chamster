import { createContext, useContext, Component } from "react";
import { User } from "../models/User";
import { authService } from "../services/auth.service";

interface State {
  loading: boolean;
  login: (email: string, password: string) => void;
  signup: (email: string, username: string, password: string) => void;
  logout: () => void;
  editUsername: (newUsername: string) => Promise<void>;
  editPassword: (newPassword: string) => Promise<void>;
  user: User;
  isLoggedIn: boolean;
}
export const UserContext = createContext<State | null>(null);

export function useUser() {
  return useContext(UserContext);
}

class UserProvider extends Component<{ children: any }, State> {
  constructor(props: { children: any }) {
    super(props);
    this.state = {
      loading: true,
      isLoggedIn: false,
      login: this.login.bind(this),
      signup: this.signup.bind(this),
      logout: this.logout.bind(this),
      editUsername: this.editUsername.bind(this),
      editPassword: this.editPassword.bind(this),
      user: {
        id: "",
        email: "",
        username: "",
        role: "user",
      },
    };
  }

  override async componentDidMount() {
    try {
      const user = await authService.getSession();
      this.setState({ user, isLoggedIn: true, loading: false });
    } catch (e) {
      this.setState({ loading: false });
    }
  }

  async login(email: string, password: string) {
    const user = await authService.login(email, password);
    this.setState({ user, isLoggedIn: true });
  }

  async signup(email: string, username: string, password: string) {
    const user = await authService.signup(email, username, password);
    this.setState({ user, isLoggedIn: true });
  }

  async logout() {
    await authService.logout();
    this.setState({
      user: {
        id: "",
        email: "",
        username: "",
        role: "user",
      },
      isLoggedIn: false,
    });
  }

  async editUsername(newUsername: string) {
    await authService.editUsername(newUsername);
    const user: User = { ...this.state.user };
    user.username = newUsername;
    this.setState({ user });
  }
  editPassword(password: string) {
    return authService.editPassword(password);
  }
  override render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
