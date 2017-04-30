import React from 'react';
import styles from './styles.css';

export default ({ menuButtonClicked, menuVisible }) => <header className={ `${styles.header}${menuVisible ? ` ${styles.menuVisibleForHeader}` : ``}` }>
    <button className={ `${styles.menuButton}${menuVisible ? ` ${styles.menuVisibleForButton}` : ``}` } onClick={ menuButtonClicked }>Menu</button>
    <h1 className={ styles.h1 }>Woot<strong>!</strong></h1>
    <a href="/cart" className={ styles.cartLink } data-cart-count="0">Cart</a>
</header>;
