import React from 'react';
import styles from './footer.css';
import Links from './links';

export default () => <footer className={ styles.footer }>
    <a href="" className={ styles.customerService }>Customer Service</a>
    <Links />
    <p className={ styles.copyright }>Woot Logos, Site Design, & Content &copy; Woot, Inc. 2004-{ new Date().getFullYear() }. All Rights Reserved.</p>
</footer>;
