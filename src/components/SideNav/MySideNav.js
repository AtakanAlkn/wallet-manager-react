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
          <NavText>Ana Sayfa</NavText>
        </NavItem>
        <NavItem eventKey="transaction">
          <NavIcon>
            <i
              className="fa-solid fa-clock-rotate-left"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>İşlem Geçmişi</NavText>
        </NavItem>
        <NavItem eventKey="income">
          <NavIcon>
            <i
              className="fa-regular fa-square-plus"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Gelirler</NavText>
        </NavItem>
        <NavItem eventKey="expense">
          <NavIcon>
            <i
              className="fa-regular fa-square-minus"
              style={{ fontSize: "1.75em" }}
            />
          </NavIcon>
          <NavText>Gİderler</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default MySideNav;
