import styles from "../styles/Footer/Footer.module.css";
import { FiTwitter, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
import Link from 'next/link'

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.social_icons}>
            <div className={styles.icon}>
              <FiInstagram
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://instagram.com/ondguk")}
              />
            </div>
            <div className={styles.icon}>
              <FiFacebook
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://facebook.com/ondguk")}
              />
            </div>
            <div className={styles.icon}>
              <FiTwitter
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://twitter.com/ondguk")}
              />
            </div>
            <div className={styles.icon}>
              <IoLogoTiktok
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://www.tiktok.com/@ondguk")}
              />
            </div>
            <div className={styles.icon}>
              <FiYoutube
                size={18}
                className={` ${styles.svg_icon} center_this`}
                onClick={() => window.open("https://www.youtube.com/@ondg")}
              />
            </div>
          </div>

          <div className={styles.footerPoliciesContainer}>
            <div className={styles.footerPrivacyPolicy}>
              <Link  href="/privacy-policy">Privacy Policy</Link>
            </div>

            <div className={styles.footerTermsConditions}>
              <Link  href="/termsconditions">Terms & Conditions</Link>
            </div>
            <div className={styles.footerCookiePolicy}>
              <Link  href="/cookies-policy">Cookies Policy</Link>
            </div>
            <div className={styles.footerRefundsPolicy}>
              <Link href="/refund-policy">Refund Policy</Link>
            </div>
            <div className={styles.footerFAQs}>
              <Link href="/faq">FAQs</Link>
            </div>

          </div>
          <div className={styles.copyright}>
            <p>&copy; 2023 ONDG. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
