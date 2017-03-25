import React, { Component } from 'react';
import styles from './header.css';

export default class Header extends Component {
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
            <button className={ styles.menuButton } onClick={ this.menuButtonClick }>Menu</button>
            <nav className={ `${styles.categories}${categoriesVisible ? ` ${styles.categoriesVisible}` : ``}` }>
                <ul>
                    <li><a href="/" className={ `${styles.categoryLink}${location.pathname == '/' ? ` ${styles.activeCategory}` : ``}` }>Featured</a></li>
                    <li><a href="" className={ styles.categoryLink }>Home &amp; Kitchen</a></li>
                    <li><a href="" className={ styles.categoryLink }>Electronics</a></li>
                    <li><a href="" className={ styles.categoryLink }>Computers</a></li>
                    <li><a href="" className={ styles.categoryLink }>Tools &amp; Garden</a></li>
                    <li><a href="" className={ styles.categoryLink }>Sports &amp; Outdoors</a></li>
                    <li><a href="" className={ styles.categoryLink }>Fashion</a></li>
                    <li><a href="" className={ styles.categoryLink }>Kids &amp; Toys</a></li>
                    <li><a href="" className={ styles.categoryLink }>Shirt</a></li>
                    <li><a href="" className={ styles.categoryLink }>Wine</a></li>
                    <li><a href="" className={ styles.categoryLink }>Sellout</a></li>
                    <li><a href="" className={ styles.categoryLink }>Flash Deals</a></li>
                </ul>
            </nav>
            <nav className={ `${styles.menu}${menuVisible ? ` ${styles.menuVisible}` : ``}` }>
                <ul>
                    <li><a href="" className={ styles.menuLink }>Feedback</a></li>
                    <li><a href="" className={ styles.menuLink }>Sign In</a></li>
                    <li><a href="" className={ styles.menuLink }>Community</a></li>
                    <li><a href="" className={ styles.menuLink }>Blog</a></li>
                    <li><a href="" className={ styles.menuLink }>What is Woot?</a></li>
                    <li><a href="" className={ styles.menuLink }>Customer Service</a></li>
                </ul>
            </nav>
        </header>;
    }
};
