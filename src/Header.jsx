import hamburger from "./assets/hamburger.webp"

function Header() {
  return (
    <header>
      <p className="nav-info">Welcome to islamicseries.org</p>
      <img className="hamburger" src={hamburger} alt="" />
    </header>
  );
}

export default Header;
