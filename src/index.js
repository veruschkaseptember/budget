import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

//Line 6, only time accessing the real DOM, App go inside of the document and target the root which an empty div inside HTML