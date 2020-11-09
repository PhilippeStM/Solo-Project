import React, { useState } from 'react';
import axios from "axios";
import { Link, navigate } from '@reach/router';
import styles from './styles/Checkout.module.css';

const Checkout = (props) => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const createNewUser = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users", {
            email: email,
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            stateCode: stateCode,
            zip: zip,
            phoneNumber: phoneNumber,
        })
            .then((res) => {
                console.log(res.data._id);
                navigate("/account/" + res.data._id);
            })
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.wrapperBorder}>
                <h5 className={styles.h5} >Enter Delivery Information</h5>
                <img className={styles.roll} src="https://media1.tenor.com/images/9777a16d1164acc414e7b30abecab2a7/tenor.gif?itemid=8911138" alt="roll" />
                <Link className={styles.link2} to="/menu">Back to Menu</Link>
                <Link className={styles.link} to="/">Home Page</Link>
                <form onSubmit={createNewUser} >
                    <div className={styles.form}>
                        <input placeholder="Email" className={styles.input} type="email" id="email" onChange={(e) => setEmail(e.target.value)} ></input>
                        <input placeholder="First Name" className={styles.input} type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)} ></input>
                        <input placeholder="Last Name" className={styles.input} type="text" id="lastName" onChange={(e) => setLastName(e.target.value)} ></input>
                        <input placeholder="Address" className={styles.input} type="text" id="address" onChange={(e) => setAddress(e.target.value)} ></input>
                        <input placeholder="City" className={styles.input} type="text" id="city" onChange={(e) => setCity(e.target.value)} ></input>
                        <input placeholder="State" className={styles.input} type="string" id="state" onChange={(e) => setStateCode(e.target.value)} ></input>
                        <input placeholder="Zip Code" className={styles.input} type="string" id="zip" onChange={(e) => setZip(e.target.value)} ></input>
                        <input placeholder="Phone Number" className={styles.input} type="tel" id="phone-number" onChange={(e) => setPhoneNumber(e.target.value)} ></input>
                        <button type="submit" className={styles.button}>Complete Order!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout;