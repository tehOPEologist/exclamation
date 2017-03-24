import React, { Component } from 'react';
import styles from './header.css';

export default class Header extends Component {
    state = { categoriesVisible: false };

    menuButtonClick = (e) => {
        e.preventDefault();
        this.setState({ categoriesVisible: !this.state.categoriesVisible });
    };

    render = () => {
        let { categoriesVisible } = this.state;
        
        return <header className={ styles.header }>
            <h1 className={ styles.logo }><a href="/" className={ styles.logoLink }>Woot<strong>&#33;</strong></a></h1>
            <button className={ styles.search }>Search</button>
            <button className={ styles.menu } onClick={ this.menuButtonClick }>Menu</button>
            <nav className={ `${styles.categories}${categoriesVisible ? ` ${styles.menuVisible}` : ``}` }>
                <ul>
                    <li><a href="/" className={ styles.categoryLink }>Woot&#33;</a></li>
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
        </header>;
    }
};
