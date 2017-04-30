import React, { Component } from 'react';
import styles from './styles.css';
import Header from './header';
import Menu from './menu';
import Footer from './footer';

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
        <Header menuButtonClicked={ this.menuButtonClicked } menuVisible={ this.state.menuVisible } category={ this.state.category } />
        <Menu visible={ this.state.menuVisible } category={ this.state.category } categoryClicked={ this.categoryClicked } />
        <Footer category={ this.state.category } />
    </div>;
};
