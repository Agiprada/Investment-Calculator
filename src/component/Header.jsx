import logo from "../assets/investment-calculator-logo.png";
import "./header.css";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="" />
      <h1>investment Calculator</h1>
    </header>
  );
}

export default Header;
