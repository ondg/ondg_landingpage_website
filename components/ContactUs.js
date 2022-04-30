import styles from "../styles/ContactUs/ContactUs.module.css";
import { IoMailOutline, IoPersonOutline, IoChatboxOutline } from "react-icons/io5";
import { useState } from "react";

function ContactUs() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    error: null,
    loading: false,
  });
  
  const { name, email, message, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !message) {
      setData({ ...data, error: "All Fleids are Requried" });
    }
    if (name && email && message) {
      try {
      
        fetch('/api/contact', {
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
              name: "",
              email: "",
              message: "",
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
      <main className="main">
        <div className="container">
          <div className={styles.contactUs}>
            <div className="row direction justify-content-between">
              <div className="col-lg-4">
                <div className={styles.contact_form}>
                  <h1>Let's talk</h1>
                  <p>Ask us anything or just say hi...</p>
                  <form className={styles.form}>
                    <div className={`input ${styles.form_input}`}>
                      <input placeholder="Your Name" type="text" name="name" value={name} onChange={handleChange} />
                      <IoPersonOutline
                        size={18}
                        color="var(--black-color)"
                        className={styles.form_icon}
                      />
                    </div>

                    <div className={`input ${styles.form_input}`}>
                      <input placeholder="Your Email" type="email" name="email" value={email}  onChange={handleChange} />
                      <IoMailOutline
                        size={18}
                        color="var(--black-color)"
                        className={styles.form_icon}
                      />
                    </div>

                    <div className={`input ${styles.form_input}`}>
                      <textarea placeholder="Your Message" type="text" cols="50" rows="4" name="message" value={message} onChange={handleChange}/>
                      <IoChatboxOutline
                        size={18}
                        color="var(--black-color)"
                        className={styles.form_icon}
                      />
                    </div>
                    {error ? (
                      <p
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {error}
                      </p>
                    ) : null}
                    <div className={styles.form_button}>
                    <button className="button" type="submit" onClick={(e)=> handleSubmit(e)} disabled={loading}>{loading ? "Sending..." : "Send"}</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
              <div className={styles.contact_image}>
                <img src="/images/contact_boy.svg" alt="contact_boy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactUs;
