import React from 'react';
import Featured from '../components/featured';
import Ad from '../components/ad';

export default ({ match }) => {
    let category = match.params.category == undefined ? 'Woot' : `${match.params.category.substr(0, 1).toUpperCase()}${match.params.category.substr(1, match.params.category.length)}`;

    return <main>
        <Featured category={ category } />
        <Ad />
    </main>;
};
