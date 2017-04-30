import React from 'react';
import styles from './styles.css';

export default ({ menuButtonClicked, menuVisible, category }) => <header className={ `${styles.header} ${styles[category]}${menuVisible ? ` ${styles.menuVisibleForHeader}` : ``}` }>
    <button className={ `${styles.menuButton}${menuVisible ? ` ${styles.menuVisibleForButton}` : ``}` } onClick={ menuButtonClicked }>Menu</button>
    <h1 className={ styles.h1 }>{ category }<strong className={ styles.strong }>!</strong></h1>
    <a href="/cart" className={ styles.cartLink } data-cart-count="0">Cart</a>
</header>;
