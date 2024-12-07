import { NavLink } from "react-router-dom";
import "../static files/Styles/Navbar and Footer/navbar.css";
import "../App.css";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const logoUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480713/emerlogo_wgn4ka.png";
  const flagEnUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480717/flagEn_a8pgk1.png";
  const flagRuUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480715/flagRu_xrt5xa.png";
  const flagAzUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480714/flagAz_rr6xgh.png";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "AZ",
    flag: flagAzUrl,
  });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const overlayRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prev) => !prev);
  };

  const handleLanguageOptionClick = (language) => {
    setCurrentLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  const closeLanguageMenuOnClickOutside = (event) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target) &&
      !event.target.closest(".language-btn")
    ) {
      setIsLanguageMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeLanguageMenuOnClickOutside);
    return () =>
      document.removeEventListener("click", closeLanguageMenuOnClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav id="navbar" className={isNavbarHidden ? "hidden" : ""}>
          <ul className="brand">
            <li>
              <NavLink to="/">
                <img id="logoimg" src={logoUrl} alt="logo" />
              </NavLink>
            </li>
          </ul>

          <ul className={`links ${isMenuOpen ? "show" : ""}`} id="navLinks">
            <li>
              <div>
                <NavLink className="linkA" to='/company'>
                  Şirkət
                </NavLink>
              </div>
            </li>
            <li>
              <div>
              <NavLink className="linkA" to='/support'>
                  Dəstək
                </NavLink>
              </div>
            </li>
            <li className="signUpLi">
              <NavLink className="signUpButton" to="/driver">
                Sürücü olun
              </NavLink>
            </li>
            <li>
              <button className="language-btn" onClick={toggleLanguageMenu}>
                <img
                  src={currentLanguage.flag}
                  alt={currentLanguage.code}
                  className="flag-icon"
                />
                <span id="currentLanguage">{currentLanguage.code}</span>
                <span id="arrow" className="arrow">
                  {isLanguageMenuOpen ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`language-menu ${isLanguageMenuOpen ? "show" : ""}`}
                ref={overlayRef}
              >
                {[
                  { code: "EN", flag:  flagEnUrl  },
                  { code: "RU", flag:  flagRuUrl },
                  { code: "AZ", flag: flagAzUrl },
                ].map((language) => (
                  <div
                    key={language.code}
                    className="language-option"
                    onClick={() => handleLanguageOptionClick(language)}
                  >
                    <img src={language.flag} alt={language.code} />
                    <span>{language.code}</span>
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <button className="menuBtn" id="menuBtn" onClick={toggleMenu}>
            <span id="menuIcon" className="arrowBtn">
              {isMenuOpen ? "▲" : "▼"}
            </span>
          </button>
        </nav>
      </header>

      {isMenuOpen && <div className="overlay show" onClick={closeMenu} />}
    </>
  );
};

export default Navbar;

// export default function Navbar() {
//   // Menü durumunu izlemek için state kullanıyoruz
//   //   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Menü açma/kapatma işlemi
//   //   const toggleMenu = () => {
//   //     setIsMenuOpen(!isMenuOpen); // Durumu tersine çeviriyoruz
//   //     console.log(isMenuOpen);
//   //   };

//   //   const link =()=>{
//   //     setIsMenuOpen(false);
//   //   }

//   return (
//     <>
//       <header>
//         <nav id="navbar">
//           <ul className="brand">
//             <li>
//               <a href="index.html">
//                 <img id="logoimg" src="Images/emerlogo.png" alt="logo" />
//               </a>
//             </li>
//           </ul>

//           <ul className="links" id="navLinks">
//             <li>
//               <div>
//                 <a className="linkA" href="company.html">
//                   Şirkət
//                 </a>
//               </div>
//             </li>
//             <li>
//               <div>
//                 <a className="linkA" href="support.html">
//                   Dəstək
//                 </a>
//               </div>
//             </li>
//             <li className="signUpLi">
//               <a className="signUpButton" href="driver.html">
//                 Sürücü olun
//               </a>
//             </li>
//             <li>
//               <button className="language-btn" onClick={toggleLanguageMenu}>
//                 <img src="Images/flagAz.png" alt="Az" className="flag-icon" />
//                 <span id="currentLanguage">AZ</span>
//                 <span id="arrow" className="arrow">
//                   &#9662;
//                 </span>
//               </button>
//               <div className="language-menu">
//                 <div className="language-option">
//                   <img src="Images/flagEn.png" alt="EN" />
//                   <span>EN</span>
//                 </div>
//                 <div className="language-option">
//                   <img src="Images/flagRu.png" alt="RU" />
//                   <span>RU</span>
//                 </div>
//                 <div className="language-option">
//                   <img src="Images/flagAz.png" alt="AZ" />
//                   <span>AZ</span>
//                 </div>
//               </div>
//             </li>
//           </ul>
//           <button className="menuBtn" id="menuBtn">
//             <span id="menuIcon" className="arrowBtn">
//               &#9662;
//             </span>
//           </button>
//         </nav>
//       </header>
//     </>
//   );
// }
