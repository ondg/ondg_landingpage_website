import styles from "../styles/Footer/Footer.module.css";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.social_icons}>
            <div className={styles.icon}>
              <FiTwitter
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://twitter.com/ondguk")}
              />
            </div>
            <div className={styles.icon}>
              <FiInstagram
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://instagram.com/ondguk")}
              />
            </div>
            <div className={styles.icon}>
              <IoLogoTiktok
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://www.tiktok.com/@ondguk")}
              />
            </div>
          </div>

          <div className={styles.copyright}>
          <p>Copyright &copy; 2022 ONDG. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
