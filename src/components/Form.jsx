import React from 'react';
import {observer} from 'mobx-react';

const Form = ({store}) => (
  <form
    autoComplete="on"
    onSubmit={e => {
      e.preventDefault();
      // Add item to store
      const name = e.target.name.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      store.add({name, email, phone});
      // Reset form
      e.target.reset();
      e.target.name.focus();
    }}>
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" id="name" autoComplete="name" />
    <br />

    <label htmlFor="email">Email Address:</label>
    <input type="text" name="email" id="email" autoComplete="email" />
    <br />

    <label htmlFor="phone">Phone Number:</label>
    <input type="text" name="phone" id="phone" autoComplete="tel" />
    <br />

    <button type="submit">Submit</button>
  </form>
);

export default observer(Form);
