import React from 'react';
import Featured from '../components/featured';
import Ad from '../components/ad';
import Subcats from '../components/subcats';
import Plus from '../components/plus';

export default ({ match }) => {
    let category = match.params.category == 'undefined' ? null : match.params.category;

    return <main>
        <Featured category={ category } />
        <Ad />
        <Subcats category={ category } />
        <Plus category={ category } />
    </main>;
};