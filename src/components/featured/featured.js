import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = { featured: null };
    }

    getFeatured = () => {
        fetch(`//api.woot.com/2/events.json?site=${this.props.category == null ? `www` : this.props.category}.woot.com&eventType=Daily&key=f467c46a3ee443e39cfd77e4141b8912`)
        .then(response => response.json())
        .then(json => {
            this.setState({ featured: json });
        })
        .catch(err => {
            console.log(err);
        });
    };

    componentDidMount = () => {
        this.getFeatured();
    };

    render = () => {
        let { featured } = this.state;
        let url = (featured) => {
            if (featured[0].Offers[0].Url.indexOf(`/plus/`) != -1) {
                return `plus/${featured[0].Offers[0].Url.split(`/`).pop().split(`?`).shift()}`;
            } else {
                return featured[0].Offers[0].Url.split(`/`).pop().split(`?`).shift();
            }
        };

        return featured && <Link to={ `${this.props.category ? `/${this.props.category}/` : `/`}${url(featured)}` } className={ styles.featured }>
            <h1 className={ styles.h }>Featured</h1>
            <img src={ featured[0].Offers[0].Photos[0].Url } alt={ featured[0].Title } className={ styles.img } />
            <h2 className={ styles.h2 }>{ featured[0].Title }</h2>
            <p className={ `${styles.p} ${styles.price}` }>
                <sup className={ styles.pSup }>&#36;</sup>
                <span>{ featured[0].Offers[0].Items[0].SalePrice.toString().split('.').shift() }</span>
                <sup className={ styles.pSup }>99</sup>
            </p>
            <p className={ styles.p }>Condition: New</p>
            <p className={ styles.p }>
                <span className={ styles.stars }></span>
                <span className={ styles.reviewCount }>1&#44;179 Amazon Reviews</span>
            </p>
        </Link>;
    }
};
