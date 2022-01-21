import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
        <Provider>
            <App />
        </Provider>
document.getElementById('root')
);

//Line 6, only time accessing the real DOM, App go inside of the document and target the root which an empty div inside HTML