import React from 'react';
import styles from './styles.css';

export default ({ category }) => <footer className={ `${styles.footer} ${styles[category]}` }>
    <small>&copy; 2004-{ new Date().getFullYear() } Woot, Inc.</small>
</footer>;
