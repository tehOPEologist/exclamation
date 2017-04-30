import React, { Component } from 'react';
import styles from './styles.css';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

export default class App extends Component {
    state = { menuVisible: false };

    menuButtonClicked = e => {
        e.preventDefault();
        this.setState({ menuVisible: !this.state.menuVisible });
    };

    closeMenu = e => {
        if (this.state.menuVisible && e.target.id !== 'menu' && e.target.parentNode.id !== 'menu') {
            e.preventDefault();
            this.setState({ menuVisible: false });
        }
    };

    render = () => <div className={ `${styles.app}${this.state.menuVisible ? ` ${styles.menuVisible}` : ``}` } onClick={ this.closeMenu }>
        <Header menuButtonClicked={ this.menuButtonClicked } menuVisible={ this.state.menuVisible } />
        <Menu visible={ this.state.menuVisible } />
        <Footer />
    </div>;
};
