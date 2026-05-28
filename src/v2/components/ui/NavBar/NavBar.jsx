import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ChevronDown, Menu, X } from "lucide-react";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  const navItems = [
    { key: "nav_home", path: "/", label: "Home" },
    {
      key: "nav_program",
      label: "Program",
      hasDropdown: true,
      dropdownItems: [
        { label: "Multimedia", href: `${import.meta.env.BASE_URL}multimedia.html` },
        { label: "Game Design and Development", href: `${import.meta.env.BASE_URL}game-design.html` },
      ],
    },
    {
      key: "nav_student_benefits",
      path: "/student-benefits",
      label: "Student Benefits",
    },
    {
      key: "nav_expert_opinions",
      path: "/expert-opinions",
      label: "Expert Opinions",
    },
    {
      key: "nav_news_and_activities",
      path: "/news-activities",
      label: "News & Activities",
    },
    { key: "nav_contact", path: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src={`${import.meta.env.BASE_URL}vite.svg`} alt="VCC Logo" className={styles.logoImage} />
          <span className={styles.logoText}>PTIT VCC</span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <div key={item.key} className={styles.navItem}>
              {item.hasDropdown ? (
                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className={styles.dropdownButton}>
                    {item.label}
                    <ChevronDown size={16} className={styles.chevron} />
                  </button>
                  {isDropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {item.dropdownItems.map((dropItem, index) =>
                        dropItem.href ? (
                          <a
                            key={index}
                            href={dropItem.href}
                            className={styles.dropdownItem}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {dropItem.label}
                          </a>
                        ) : (
                          <Link
                            key={index}
                            to={dropItem.path}
                            className={styles.dropdownItem}
                          >
                            {dropItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${location.pathname === item.path ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Language, Sign In & Mobile Menu */}
        <div className={styles.rightSection}>
          <LanguageSwitch />
          <button className={styles.signInButton}>Sign In</button>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileLanguageWrapper}>
              <LanguageSwitch />
            </div>
            {navItems.map((item) => (
              <div key={item.key} className={styles.mobileNavItem}>
                {item.hasDropdown ? (
                  <div className={styles.mobileDropdown}>
                    <div className={styles.mobileDropdownLabel}>{item.label}</div>
                    {item.dropdownItems.map((dropItem, index) =>
                      dropItem.href ? (
                        <a
                          key={index}
                          href={dropItem.href}
                          className={styles.mobileDropdownItem}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </a>
                      ) : (
                        <Link
                          key={index}
                          to={dropItem.path}
                          className={styles.mobileDropdownItem}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      )
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${
                      location.pathname === item.path ? styles.active : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
