import React from 'react';
import styles from './categories.css';

export default ({ visible }) => <nav className={ `${styles.categories}${visible ? ` ${styles.visible}` : ``}` }>
    <ul>
        <li><a href="/" className={ `${styles.link}${location.pathname == '/' ? ` ${styles.active}` : ``}` }>Featured</a></li>
        <li><a href="" className={ styles.link }>Home &amp; Kitchen</a></li>
        <li><a href="" className={ styles.link }>Electronics</a></li>
        <li><a href="" className={ styles.link }>Computers</a></li>
        <li><a href="" className={ styles.link }>Tools &amp; Garden</a></li>
        <li><a href="" className={ styles.link }>Sports &amp; Outdoors</a></li>
        <li><a href="" className={ styles.link }>Fashion</a></li>
        <li><a href="" className={ styles.link }>Kids &amp; Toys</a></li>
        <li><a href="" className={ styles.link }>Shirt</a></li>
        <li><a href="" className={ styles.link }>Wine</a></li>
        <li><a href="" className={ styles.link }>Sellout</a></li>
        <li><a href="" className={ styles.link }>Flash Deals</a></li>
    </ul>
</nav>;
