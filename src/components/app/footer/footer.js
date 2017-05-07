import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default ({ category }) => <footer className={ `${styles.footer} ${styles[category]}` }>
    <Link to="/customer-service" className={ `${styles.customerService} ${styles[`${category}Text`]}` }>Customer Service</Link>
    <div className={ styles.lists }>
        <div className={ styles.listsGroup }>
            <ul className={ styles.list }>
                <li><Link to="/faq" className={ styles.link }>FAQ</Link></li>
                <li><Link to="/careers" className={ styles.link }>Careers</Link></li>
                <li><Link to="/recall-notices" className={ styles.link }>Recall Notices</Link></li>
                <li><Link to="/return-policy" className={ styles.link }>Return Policy</Link></li>
            </ul>
            <ul className={ `${styles.list} ${styles.community}` }>
                <li><Link to="/forums/woots" className={ styles.link }>Woots</Link></li>
                <li><Link to="/forums/world-of-woot" className={ styles.link }>World of Woot</Link></li>
                <li><Link to="/forums/everything-but-woot" className={ styles.link }>Everything but Woot</Link></li>
            </ul>
        </div>
        <div className={ styles.listsGroup }>
            <ul className={ styles.list }>
                <li><Link to="/terms-and-conditions" className={ styles.link }>Terms and Conditions</Link></li>
                <li><Link to="/product-warranty" className={ styles.link }>Product Warranty</Link></li>
                <li><Link to="/privacy-policy" className={ styles.link }>Privacy Policy</Link></li>
                <li><Link to="/vendor-resources" className={ styles.link }>Vendor Resources</Link></li>
            </ul>
            <ul className={ `${styles.list} ${styles.blog}` }>
                <li><Link to="/blog/woot" className={ styles.link }>Woot</Link></li>
                <li><Link to="/blog/news" className={ styles.link }>News</Link></li>
                <li><Link to="/blog/miscellanea" className={ styles.link }>Miscellanea</Link></li>
            </ul>
        </div>
    </div>
    <small className={ styles.copyright }>&copy; 2004-{ new Date().getFullYear() } Woot, Inc.</small>
</footer>;
