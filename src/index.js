import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './fonts';
import 'normalize.css';
import './index.css';
import App from './components/app';

if (!module.hot) {
    require('offline-plugin/runtime').install();
}

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/app', () => { render(App); });
}
