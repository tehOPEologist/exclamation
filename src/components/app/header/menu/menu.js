import React from 'react';
import styles from './menu.css';

export default ({ visible }) => <nav className={ `${styles.menu}${visible ? ` ${styles.visible}` : ``}` }>
    <ul>
        <li><a href="" className={ styles.link }>Feedback</a></li>
        <li><a href="" className={ styles.link }>Sign In</a></li>
        <li><a href="" className={ styles.link }>Community</a></li>
        <li><a href="" className={ styles.link }>Blog</a></li>
        <li><a href="" className={ styles.link }>What is Woot?</a></li>
        <li><a href="" className={ styles.link }>Customer Service</a></li>
    </ul>
</nav>;
