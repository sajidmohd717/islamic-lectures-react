import hamburger from "./assets/hamburger.webp";
import discover from "./assets/discover.png"


function Header() {
  return (
    <header>
      <div className="top-header">
        <p className="nav-info">Welcome to islamicseries.org</p>
        <img className="hamburger" src={hamburger} alt="" />
      </div>
      <div className="catagories-container">
        <div className="catagories">
          <button className="cat-btn"><img className="discover" src={discover} alt="" /></button>
          <button className="cat-btn current-cat">All</button>
          <button className="cat-btn">Heart</button>
          <button className="cat-btn">Reflection</button>
          <button className="cat-btn">Quran Tafsir</button>
          <button></button>
        </div>
        <div className="view-all-cat"></div>
      </div>
    </header>
  );
}

export default Header;
