import React from 'react';
import {observer} from 'mobx-react';

const Contact = ({contact}) => (
  <div>
    <h3>{contact.name}</h3>
    <p>Email: {contact.email}</p>
    <p>Telephone: {contact.phone}</p>
    <button onClick={e => contact.remove()} >Remove</button>
  </div>
);

export default observer(Contact);
