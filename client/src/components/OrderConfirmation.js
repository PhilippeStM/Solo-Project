import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "@reach/router";
import styles from './styles/OrderConfirmation.module.css';

const ConfForm = (props) => {

    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/" + props.id)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => console.log(err));
    });

    return (
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <h2 className={styles.mainHeader} >Delivery Confirmation</h2>
                <Link className={styles.link} to="/menu">Order Again!</Link>
                <h4 className={styles.text} >Congrats <b>{user.firstName}</b>! Your order has been received and is now being prepared!</h4>
                <h4 className={styles.text} >When complete, delivery will be made to <b>{user.address}</b> in the city of <b>{user.city}</b>, <b>{user.stateCode}</b>.</h4>
                <h5 className={styles.text} >If you have any questions about your order, or your contact information is incorrect, please call us at 555-555-5555.</h5>
                <h4 className={styles.text} >Your contact information:</h4>
                <h5 className={styles.text} ><b>Email: </b>{user.email}</h5>
                <h5 className={styles.text} ><b>Phone Number: </b>{user.phoneNumber}</h5>
                <h2 className={styles.text} >Thank you for choosing <i>SushiMe!</i></h2>
            </div>
        </div>
    )
};

export default ConfForm;