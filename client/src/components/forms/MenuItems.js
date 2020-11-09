import { useState, useEffect } from 'react';
import { Link } from "@reach/router";
import styles from '../styles/MenuItems.module.css';
import axios from "axios";

const MenuItems = () => {

    const [menu, setMenu] = useState([]);
    let [total, setTotal] = useState(0);
    const [titleList, setTitleList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/menu/")
            .then((res) => {
                setMenu(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const priceTotal = (sushi) => {
        setTotal(total + sushi.price);
        console.log(sushi.price);
    }

    const titleTotal = (sushi) => {
        setTitleList(titleList => [...titleList, sushi.title])
        console.log(sushi.title);
        console.log(titleList);
    }

    return (
        <div>
            <div className={styles.overlay}>
                {menu.map(sushi => (
                    <div>
                        <div onClick={e => { priceTotal(sushi); titleTotal(sushi); }} className={styles.itemWrapper} >
                            <img className={styles.img} src={sushi.url} alt="sushi"></img>
                            <p className={styles.title} >{sushi.title}</p>
                            <p className={styles.price} >${sushi.price}</p>
                            <p className={styles.p} >{sushi.description}</p>
                        </div>
                    </div>
                ))}
                <h3 className={styles.orderDetails}><b>Order Details:</b></h3>
                <ul className={styles.list}>
                    {titleList.map((item) => (
                        <li className={styles.li}><b>{item}</b></li>
                    ))}
                </ul>
                <h5 className={styles.marginMe}><b>Total Price: ${total.toFixed(2)}</b></h5>
                <p><Link className={styles.checkout} to="/checkout">Proceed to Checkout</Link></p>
            </div>
        </div>
    )
}

export default MenuItems;