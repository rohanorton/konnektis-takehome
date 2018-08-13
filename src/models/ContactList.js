import Contact from './Contact';
import {types} from 'mobx-state-tree';

const ContactList = types
  .model('ContactList', {
    list: types.array(Contact),
  })
  .actions(self => ({
    add(contact) {
      if (contact.email && contact.name && contact.phone) {
        // Generate ID here until API exists
        contact.id = String(Math.floor(Math.random() * 10 * 7));
        self.list.push(contact);
      }
    },
  }));

export default ContactList;
