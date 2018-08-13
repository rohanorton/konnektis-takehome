import React from 'react';
import {observer} from 'mobx-react';

const Contact = ({contact}) => (
  <div>
    <h3>{contact.name}</h3>
    <p>Email: {contact.email}</p>
    <p>Telephone: {contact.phone}</p>
  </div>
);

export default observer(Contact);
