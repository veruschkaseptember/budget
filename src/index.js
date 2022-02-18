import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
      <SpeechProvider appId="c8425968-0a7f-4b8b-a54a-798b4e5c8c13" language="en-US">
      <Provider>
            <App />
      </Provider>
      </SpeechProvider>, 
       document.getElementById('root'),
); 
//Line 6, only time accessing the real DOM, App go inside of the document and target the root which an empty div inside HTML

