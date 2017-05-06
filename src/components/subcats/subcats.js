import React from 'react';
import { Link } from 'react-router-dom';
import toSlugCase from 'to-slug-case';
import styles from './styles.css';

const subcats = category => {
    const subcats = [
        'Pet Supplies',
        'Artwork & Decor',
        'Health & Personal Care',
        'Lighting & Fans',
        'Kitchen Tools & Utensils',
        'Arts, Crafts & Sewing',
        'Bedding',
        'Appliances',
        'Cookware & Bakeware'
    ];
    const subcatsObjs = [];

    subcats.forEach(subcat => {
        subcatsObjs.push({
            name: subcat,
            url: `/${category}/${toSlugCase(subcat)}`,
            imageUrl: '//placeimg.com/100/100'
        });
    });

    return subcatsObjs;
};

const renderSubcats = (category, subcats) => {
    const renderedSubcats = [];

    subcats.forEach((subcat, i) => {
        renderedSubcats.push(<li key={ i } className={ styles.listItem }>
            <Link to={ subcat.url } className={ `${styles.subcat} ${styles[`${category.substr(0, 1).toUpperCase()}${category.substr(1, category.length)}`]}` }>
                <span className={ styles.name }>{ subcat.name }</span>
                <img src={ subcat.imageUrl } alt={ subcat.name } />
            </Link>
        </li>);
    });

    return renderedSubcats;
};

export default ({ category }) => <section>
    <header className={ styles.header }>
        <h1 className={ styles.h }>Shop By Category</h1>
        <Link className={ `${styles.viewAll}${category ? ` ${styles[`${category.substr(0, 1).toUpperCase()}${category.substr(1, category.length)}`]}` : ``}` } to={ `${category ? `/${category}` : ``}/all` }>View All <span className={ styles.arrow }>&#12297;</span></Link>
    </header>
    <ul className={ styles.list }>
        { renderSubcats(category, subcats(category)) }
    </ul>
</section>;
