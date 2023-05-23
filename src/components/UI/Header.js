import { ReactComponent as ReactLogo } from "../../coronavirus-icon.svg";

const Header = () => {
  return (
    <h1
      style={{ textAlign: "center", fontSize: "4rem", fontFamily: "cursive"}}
    >
      C<ReactLogo style={{ height: "4rem", width: "5rem" }} />
      VID-19
    </h1>
  );
};

export default Header;
