import React from 'react';
import {observer} from 'mobx-react';

import Contact from './Contact';

const ContactList = ({list}) => (
  <ul>
    {list.map(contact => (
      <li key={contact.id}>
        <Contact contact={contact} />
      </li>
    ))}
  </ul>
);

export default observer(ContactList);
