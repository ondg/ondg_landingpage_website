import styles from "../styles/AboutUs/AboutUs.module.css";

function AboutUs() {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className={styles.aboutUs}>
            <div className="row direction">
              <div className="col-lg-6">
                <div className={styles.text}>
                  <h1>About us</h1>
                  <p>
                    Ondg is a purpose-led and community driven on-demand ethnic delivery platform that is on a mission to be the UK's #1 ethnic delivery platform.
                  </p>

                  <p>
                    We help ethnic stores with no online presence create an online store on our platform and sell products online.
                  </p>

                  <p>
                    With Ondg, you can order ethnic groceries, takeaway, and household items from all your local and favourite restaurants, supermarkets, mini markets and convenient stores (corner shops).
                  </p>
               
                  <p className={styles.delivered_text}>
                     Delivering you joy, saving you money and time!
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styles.delivery_image}>
                <img src="/images/delivery_boy.svg" alt="delivery_boy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutUs;
