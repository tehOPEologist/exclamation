import React from 'react';
import styles from './app.css';
import AppHeader from './header';
import AppFooter from './footer';

export default () => <div className={ styles.app }>
    <AppHeader />
    <AppFooter />
</div>;
