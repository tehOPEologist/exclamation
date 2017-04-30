import React, { Component } from 'react';
import styles from './styles.css';
import { categories } from '../../../constants';

export default ({ visible, category, categoryClicked }) => {
    const renderCategoryLinks = () => {
        const renderedCategoryLinks = [];

        for (let i = 0; i < categories.length; i++) {
            renderedCategoryLinks.push(<a key={ i } onClick={ categoryClicked } href="" className={ `${styles.link} ${styles[categories[i]]}` }>{ categories[i] }</a>);
        }

        return renderedCategoryLinks;
    };

    return <nav id="menu" className={ `${styles.menu}${visible ? ` ${styles.visible}` : ``}` }>
        { renderCategoryLinks() }
    </nav>;
}
