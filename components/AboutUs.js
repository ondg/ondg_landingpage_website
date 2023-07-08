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
                    Ondg is a purpose-driven and community focused ethnic delivery app that is on a mission to be a market leading ethnic delivery platform.
                  </p>
                  <p>
                    We empower ethnic stores with limited/no online presence create to an online store on our platform and sell products online and expand their reach.
                  </p>
                  <p>
                    With Ondg, you can order ethnic groceries, takeaway food, and household items from all your local and favourite ethnic restaurants, supermarkets, mini markets and convenient stores (corner shops).
                  </p>
                  <p>We deliver cultural immersion and experience!</p>
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
