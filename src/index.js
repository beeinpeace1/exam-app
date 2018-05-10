import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <Layout />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
