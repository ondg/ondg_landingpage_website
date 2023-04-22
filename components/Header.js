import styles from "../styles/Header/Header.module.css";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";


function Header() {
  const [data, setData] = useState({
    email: "",
    error: null,
    loading: false,
  });
  const {email, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email) {
      setData({ ...data, error: "Email address is required" });
    }
    if (email) {
      try {
      
        fetch('/api/homeEmail', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setData({
              email: "",
              error: null,
              loading: false,
            });
           
          }
        })
        
      } catch (err) {
        setData({ ...data, error: err.message, loading: false });
      }
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.hero}>
          <div className={` container ${styles.grid}`}>
            <div className={styles.slogan}>
              {/* <h1>Groceries Takeaway</h1> */}
              <h1>Ethnic Groceries & Takeaway</h1>
              <p>
              Delivering joy, saving customers money and time.
              </p>
            </div>

            <div className={styles.advertise}>
              <div className={styles.notify}>
              <p>Want be an Ondgenie?</p>
              <form className={styles.email_input}>
                <div className={`input ${styles.input}`}>
                  <input placeholder="Enter email address" type="email" name="email" value={email} onChange={handleChange}/>
                  <IoMailOutline size={18} color="var(--black-color)" className={styles.email_icon} />
                  
                </div>
                
                <button className="button" type="submit" disabled={loading} onClick={(e)=> handleSubmit(e)}>{loading ? "Sending..." : "Send"}</button>
                {error ? (
                      <p
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          textAlign: "center",
                          position:"absolute",
                          marginTop:"60px",
                          marginLeft:"10px"
                        }}
                      >
                        {error}
                      </p>
                    ) : null}
              </form>
              </div>

              <div className={styles.store_badges}>
                    <div className={styles.badge} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.odng.ondg", '_blank')}>
                          <img src="/images/play_store_badge.svg" alt="play_store_badge"/> 
                    </div>
                  
                    <div className={styles.badge} style={{padding:"5px"}} onClick={() => window.open("https://apps.apple.com/gb/app/ondg/id1671853480", '_blank')}>
                        <img src="/images/app_store_badge.svg" alt="app_store_badge"/>
                    </div>
              </div>
            </div>

            <div className={styles.hero_image}>
                <div>
                    <img src="/images/ondg_iphone_ss.png"/>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
