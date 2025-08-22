import { useState, useEffect } from "react";
import images from "../../cleanLogo.png";
import "./Navbar.css";
import { CgMenuRight } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    { !sidebarOpen ? setIsMenu(false) : setIsMenu(true) }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLink = () => {
    setSidebarOpen(false)
    setIsMenu(!isMenu)
  }

  return (
    <>
      <div className={`raleWay NavContainer ${isScrolled ? "scrolled" : ""}`}>
        <div className="NavSubCont container">
          <div className="NavLogo">
            <img src={images} alt="logo" />
          </div>
          <div className="NavText">
            <ul>
              <li className="navLink"><Link className="navlinktxt" to="/">Home</Link></li>
              <li className="navLink"><Link className="navlinktxt" to="/about">About</Link></li>
              <li className="navLink"><Link className="navlinktxt" to="/room">Rooms</Link></li>
              <li className="navLink"><Link className="navlinktxt" to="/contact">Contact</Link></li>
              <li className="navLink"><Link to="/login"><button className="loginBtn">Login</button></Link></li>
              <div className="mobCont">
                <li className="mobIcon" onClick={toggleSidebar}>
                  {isMenu ? <CgMenuRight className="menuIcon" /> : <ImCross className="crossIcon" />}
                </li>
              </div>
            </ul>
          </div>
          <div className={`mobileSidebar ${sidebarOpen ? "open" : ""}`}>
            <ul>
              <li><Link onClick={handleLink} to="/">Home</Link></li>
              <li><Link onClick={handleLink} to="/about">About</Link></li>
              <li><Link onClick={handleLink} to="/room">Rooms</Link></li>
              <li><Link onClick={handleLink} to="/contact">Contact</Link></li>
              <li><Link to="/login"><button onClick={handleLink} className="loginBtn">Login</button></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
