import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ContactList from './models/ContactList';

const store = ContactList.create({});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
