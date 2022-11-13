import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChatIcon } from "../../../assets/icons/chat.svg";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";
import { ReactComponent as AccountIcon } from "../../../assets/icons/account.svg";

import "./navbar.css";
export const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <LogoIcon className="navbar__logo" />
      <div className="navbar__menu">
        <NavLink to="/chat" className="navbar__item">
          <div className="navbar__dropdown">Chat</div>
          <ChatIcon className="navbar__icon" />
        </NavLink>
        <NavLink to="/account" className="navbar__item">
          <div className="navbar__dropdown">{"Account"}</div>
          <AccountIcon className="navbar__icon" />
        </NavLink>
      </div>
      <div className="navbar__feed">
        <div className="navbar__item" onClick={() => alert("logout")}>
          <div className="navbar__dropdown">Logout</div>
          <LogoutIcon className="navbar__icon" />
        </div>
      </div>
    </nav>
  );
};
