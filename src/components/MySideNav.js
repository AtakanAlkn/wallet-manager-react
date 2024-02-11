import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const MySideNav = () => {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        navigate("/" + selected);
      }}
      className="mySideNav"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="profile">
          <NavIcon>
            <i className="fa-solid fa-user" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
        <NavItem eventKey="settings">
          <NavIcon>
            <i className="fa-solid fa-gear" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default MySideNav;
