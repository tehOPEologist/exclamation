import React, { Component } from 'react';
import styles from './header.css';
import Categories from './categories';
import Menu from './menu';

export default class AppHeader extends Component {
    state = {
        categoriesVisible: false,
        searchVisible: false,
        menuVisible: false
    };

    logoButtonClick = (e) => {
        e.preventDefault();
        this.setState({ categoriesVisible: !this.state.categoriesVisible });
    };

    searchButtonClick = (e) => {
        e.preventDefault();
        this.setState(
            { searchVisible: !this.state.searchVisible },
            () => {
                if (this.state.searchVisible) {
                    setTimeout(() => { this.focusSearchInput(); }, 100);
                };
            }
        );
    };

    focusSearchInput = () => {
        this.searchInput.focus();
    };

    menuButtonClick = (e) => {
        e.preventDefault();
        this.setState({ menuVisible: !this.state.menuVisible });
    };

    render = () => {
        let { categoriesVisible, menuVisible } = this.state;
        
        return <header className={ styles.header }>
            <h1 className={ styles.logo }><button className={ styles.logoButton } onClick={ this.logoButtonClick }>Woot<strong>&#33;</strong></button></h1>
            <div className={ styles.searchWrapper }>
                <div className={ `${styles.searchContainer}${this.state.searchVisible ? ` ${styles.searchVisible}` : ``}` }>
                    <button className={ styles.searchButton } onClick={ this.searchButtonClick }>Search</button>
                    <input className={ styles.searchInput } type="text" placeholder="Search" ref={ input => { this.searchInput = input; } } />
                </div>
            </div>
            <a href="" className={ styles.cart }><span className={ styles.cartSpan }>Cart: </span>0</a>
            <button className={ styles.menuButton } onClick={ this.menuButtonClick }>Menu</button>
            <Categories visible={ categoriesVisible } />
            <Menu visible={ menuVisible } />
        </header>;
    }
};
