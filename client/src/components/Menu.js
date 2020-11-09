import React from 'react';
import { Link } from '@reach/router';
import Background from './images/background3.jpg';
import styles from './styles/Menu.module.css';
import MenuItems from './forms/MenuItems';


const Menu = () => {

    return (
        <div>
            <div className={styles.overlay}>
                <img src={Background} className={styles.backgroundImg} alt="background" />
                <div className={styles.marginLeft}>
                <h1 className={styles.h1}>Our Menu</h1>
                <Link className={styles.link} to="/">Home Page</Link>
                <h3 className={styles.h3}>Select an item below to add to your cart:</h3>
                <div className={styles.menuItems} >
                    <MenuItems />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;