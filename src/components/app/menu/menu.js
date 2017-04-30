import React, { Component } from 'react';
import styles from './styles.css';

export default ({ visible }) => <nav id="menu" className={ `${styles.menu}${visible ? ` ${styles.visible}` : ``}` }>
    <a href="/sign-in" className={ styles.link }>Sign In</a>
</nav>;
