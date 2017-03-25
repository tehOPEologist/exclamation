import React from 'react';
import styles from './footer.css';

export default () => <footer className={ styles.footer }>
    Woot Logos, Site Design, & Content &copy; Woot, Inc. 2004-{ new Date().getFullYear() }. All Rights Reserved.
</footer>;
