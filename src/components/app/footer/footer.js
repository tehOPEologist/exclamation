import React from 'react';
import styles from './styles.css';

export default () => <footer className={ styles.footer }>
    <small>&copy; 2004-{ new Date().getFullYear() } Woot, Inc.</small>
</footer>;
