import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menuIcon.png";
import cart from "../../assets/cart.png";
import profile from "../../assets/profile.png";
import { useWindowSize } from "../../hooks/useWindowize";

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!isOpen) return;

    const close = () => setIsOpen(false);
    window.addEventListener("click", close);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener("click", close);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.box}>

      <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.dropDownMenuIcon}
        >
          <img className={styles.menuIcon} src={menuIcon} alt={"menu"} />
        </div>
        
        <div className={styles.leftSide}>
          <img src={logo} alt={"logo"} />
        </div>

      

        <div className={styles.rightSide}>
          <div className={styles.menuBoxWithBorder}>
            <p>About UBF</p>
          </div>
          <div className={styles.menuBoxWithBorder}>
            <p>For ReCiPIENTS</p>
          </div>
          <div className={styles.menuBoxWithBorder}>
            <p>For restaurants</p>
          </div>
          <div
            className={styles.menuBoxWithBorder}
          >
            <p>Sign up</p>
          </div>
         
        </div>

        <div className={styles.rightIconSide}>
          <img src={cart} alt={"cart"} />
          <img src={profile} alt={"profile"} />
        </div>
      </div>
      {isOpen && width < 800 && (
        <div className={styles.dropDownMenuBox}>
          <div className={styles.dropDownMenuItem}>
            <p>About UBF</p>
          </div>
          <div className={styles.dropDownMenuItem}>
            <p>For ReCiPIENTS</p>
          </div>
          <div className={styles.dropDownMenuItem}>
            <p>For restaurants</p>
          </div>
          <div
            className={styles.dropDownMenuItem}
          >
            <p>Sign up</p>
          </div>
        
        </div>
      )}
    </>
  );
};
