import React, { useState } from "react";
import {
  IconCaretDownOutlined,
  IconHambuger,
  IconNotification,
  IconSearch,
  IconSidebarExpandLeft,
  IconSidebarExpandRight,
} from "../utils/icons";
import '../styles/Navbar.scss'

function Navbar({openSidebar, toggleSidebar}) {
  const [showMenu, setShowMenu] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="navbarContainer">
        <div className="col1">
          <button className="toggle" onClick={toggleSidebar}>
            {openSidebar ? (
              <IconSidebarExpandRight />
            ) : (
              <IconSidebarExpandLeft />
            )}
          </button>
          <img
            src="https://i.postimg.cc/tCW5Cmry/image.png"
            alt="logo"
            
          />
          <form onSubmit={handleSearch} className="search_form">
            <input type="text" placeholder="Search for anything" />
            <button>
              <IconSearch />
            </button>
          </form>
        </div>
        <div className="col2">
          <a href="/">Docs</a>
          <button>
            <IconNotification />
          </button>
          <div className="profile">
            <img src="https://i.postimg.cc/dV9jGZPx/image.png" alt="Profile" />
            <span>Adedeji</span>
            <IconCaretDownOutlined />
          </div>
        </div>
        <button
          className="toggle hamburger"
          onClick={() => setShowMenu(!showMenu)}
        >
          <IconHambuger />
        </button>
        {showMenu && (
          <div className="mobileNav">
            <form onSubmit={handleSearch} className="search_form">
              <input type="text" placeholder="Search for anything" />
              <button>
                <IconSearch />
              </button>
            </form>
            <div className="links">
              <a href="/">Docs</a>
              <button>
                <IconNotification />
              </button>
            </div>
            <div className="profile">
              <img
                src="https://i.postimg.cc/dV9jGZPx/image.png"
                alt="Profile"
              />
              <span>Adedeji</span>
              <IconCaretDownOutlined />
            </div>
          </div>
        )}
      </div>
      <div className="navbarSpacer"></div>
    </>
  );
}

export default Navbar;
