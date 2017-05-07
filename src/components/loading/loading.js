import React from 'react';
import Svg from 'react-svg-inline';
import styles from './styles.css';
import LoadingIcon from '../../images/loading.svg';
import { categories } from '../../constants';

export default ({ category }) => <div className={ styles.loading }>
    <div className="loader">
        <Svg svg={ LoadingIcon } className={ `${styles.icon} ${styles[`${category.substr(0, 1).toUpperCase()}${category.substr(1, category.length)}`]}` } />
    </div>
</div>;
