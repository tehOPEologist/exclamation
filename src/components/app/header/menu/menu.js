import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';
import { categories } from '../../../../constants';

export default ({ visible, category, categoryClicked }) => {
    const renderCategoryLinks = () => {
        const renderedCategoryLinks = [];
        const categoriesArray = Object.keys(categories);

        for (let i = 0; i < categoriesArray.length; i++) {
            renderedCategoryLinks.push(<Link key={ i } onClick={ categoryClicked } to={ `${categoriesArray[i] == `Woot` ? `/` : `/${categoriesArray[i].toLowerCase()}`}` } className={ `${styles.link} ${styles[categoriesArray[i]]}` }>{ categoriesArray[i] }</Link>);
        }

        return renderedCategoryLinks;
    };

    return <nav id="menu" className={ `${styles.menu}${visible ? ` ${styles.visible}` : ``}` }>
        { renderCategoryLinks() }
        <a href="" className={ `${styles.link} ${styles.linkAlt}` }>Feedback</a>
        <a href="" className={ `${styles.link} ${styles.linkAlt}` }>Community</a>
        <a href="" className={ `${styles.link} ${styles.linkAlt}` }>Blog</a>
        <a href="" className={ `${styles.link} ${styles.linkAlt}` }>What is Woot?</a>
        <a href="" className={ `${styles.link} ${styles.linkAlt}` }>Customer Service</a>
    </nav>;
}
