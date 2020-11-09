import React from 'react';
// import MainPic from "./images/SushiPhotoMainPage.png";
import RollVid from "./videos/RollVid.mp4";
import SushiMe from "./images/SushiMe.png";
import Background from "./images/background.jpg";
import styles from './styles/HomePage.module.css';
import { Link } from '@reach/router';

const HomePage = (props) => {
    return (
        <div className={styles.overlay}>
            <img className={styles.backgroundImg} src={Background} alt="background" />
            <img className={styles.sushiMe} src={SushiMe} alt="SushiMe!" />
            <div className={styles.centerMe}>
                <p className={styles.p}>1281  Rosewood Court, Anaheim, CA 92804 / (507) 294-2649</p>
                <Link className={styles.link} style={{ color: "white" }} to="/menu">Order Delivery!</Link>
            </div>
            <video className={styles.video} autostart autoPlay muted loop src={RollVid} type="video/mp4" />
            {/* <img className={styles.mainSushiPic} src={MainPic} alt="main sushi" /> */}
            <h3 className={styles.h3}>Fresh and bursting with flavor is what <span className={styles.italic}>SushiMe!</span> has to offer. Serving greater Orange County, CA area, we provide great tasting food that's prepared fresh with the highest quality of ingredients. Treat yourself today with a nutritious meal from our delicious menu. Options for takeout and delivery ordering online are also available. At <span className={styles.italic}>SushiMe!</span> you are sure to enjoy the great atmosphere, friendly service, and affordable prices. Take your taste buds on an unforgettable journey at <span className={styles.italic}>SushiMe!</span></h3>
        </div>
    )
};

export default HomePage;