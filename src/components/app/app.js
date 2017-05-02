import React, { Component } from 'react';
import styles from './styles.css';
import Header from './header';
import Footer from './footer';
import Submenu from './submenu';

export default class App extends Component {
    state = {
        menuVisible: false,
        category: 'Woot'
    };

    menuButtonClicked = e => {
        e.preventDefault();
        this.setState({ menuVisible: !this.state.menuVisible });
    };

    closeMenu = e => {
        if (this.state.menuVisible && e.target.id !== 'menu') {
            this.menuButtonClicked(e);
        }
    };

    categoryClicked = (e) => {
        e.preventDefault();
        this.setState({ category: e.target.innerHTML });
    };

    render = () => <div className={ `${styles.app}${this.state.menuVisible ? ` ${styles.menuVisible}` : ``}` } onClick={ this.closeMenu }>
        <Header menuButtonClicked={ this.menuButtonClicked } menuVisible={ this.state.menuVisible } category={ this.state.category } categoryClicked={ this.categoryClicked } />
        <Footer category={ this.state.category } />
        <Submenu category={ this.state.category } />
    </div>;
};
