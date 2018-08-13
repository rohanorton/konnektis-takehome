import React from 'react';
import {observer} from 'mobx-react';

import Form from './components/Form';
import ContactList from './components/ContactList';

const App = ({store}) => (
  <div>
    <Form store={store} />
    <ContactList list={store.list} />
  </div>
);

export default observer(App);
