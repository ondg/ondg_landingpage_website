import styles from "../styles/Navbar/Narbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className={styles.D_navbar}>
        <div className="container">
          <div className={styles.inner}>
            <div className={styles.logo}>
              <img src="/images/ondg_logo_transparent.png" />
            </div>

            <div
              className={
                openNav ? `${styles.links} ${styles.active}` : `${styles.links}`
              }
            >
              <ul>
                <li onClick={() => router.push('/') && setOpenNav(!openNav)}>Home</li>
                <li onClick={() => router.push('/about') && setOpenNav(!openNav)}>About</li>
                <li onClick={() => router.push('/contact') && setOpenNav(!openNav)}>Contact</li>
              </ul>
            </div>

            {/* HAMBURGER */}
            <div class={styles.hamburger} onClick={() => setOpenNav(!openNav)}>
              <input class={styles.checkbox} type="checkbox" />
              <div class={openNav ? `${styles.hamburger_lines} ${styles.active}` : `${styles.hamburger_lines}`}>
                <span class={`${styles.line} ${styles.line1}`}></span>
                <span class={`${styles.line} ${styles.line2}`}></span>
                <span class={`${styles.line} ${styles.line3}`}></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
