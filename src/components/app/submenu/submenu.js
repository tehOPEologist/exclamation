import React, { Component } from 'react';
import Svg from 'react-svg-inline';
import styles from './styles.css';
import SignInAccountIcon from '../../../images/sign-in-account.svg';
import BestIcon from '../../../images/best.svg';
import NewIcon from '../../../images/new.svg';
import EndingIcon from '../../../images/ending.svg';
import BrowseIcon from '../../../images/browse.svg';
import { categories } from '../../../constants';

export default class Submenu extends Component {
    state = { authenticated: false };

    signInAccountClick = (e) => {
        this.setState({ authenticated: !this.state.authenticated });
    };

    render = () => {
        let { category } = this.props;

        return <div className={ styles.submenu }>
            <button className={ styles.button } onClick={ this.signInAccountClick }>
                <Svg svg={ SignInAccountIcon } className={ styles.icon } fill={ categories[category] } cleanup={ true } />
                <span className={ `${styles.span} ${styles[category]}` }>{ this.state.authenticated ? `Account` : `Sign In` }</span>
            </button>
            <button className={ styles.button }>
                <Svg svg={ BestIcon } className={ styles.icon } fill={ categories[category] } cleanup={ true } />
                <span className={ `${styles.span} ${styles[category]}` }>Best</span>
            </button>
            <button className={ styles.button }>
                <Svg svg={ NewIcon } className={ styles.icon } fill={ categories[category] } cleanup={ true } />
                <span className={ `${styles.span} ${styles[category]}` }>New</span>
            </button>
            <button className={ styles.button }>
                <Svg svg={ EndingIcon } className={ styles.icon } fill={ categories[category] } cleanup={ true } />
                <span className={ `${styles.span} ${styles[category]}` }>Ending</span>
            </button>
            <button className={ styles.button }>
                <Svg svg={ BrowseIcon } className={ styles.icon } fill={ categories[category] } cleanup={ true } />
                <span className={ `${styles.span} ${styles[category]}` }>Browse</span>
            </button>
        </div>;
    }
};
