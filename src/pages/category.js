import React from 'react';
import Featured from '../components/featured';

export default ({ match }) => {
    return <main>
        <Featured category={ match.params.category == 'undefined' ? null : match.params.category } />
    </main>;
};