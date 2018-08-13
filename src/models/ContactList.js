import Contact from './Contact';
import {types, flow} from 'mobx-state-tree';

const ContactList = types
  .model('ContactList', {
    list: types.array(Contact),
  })
  .actions(self => ({
    add: flow(function*(contact) {
      if (contact.email && contact.name && contact.phone) {
        const res = yield fetch('/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        });
        const saved = yield res.json();

        self.list.push(saved);
      }
    }),

    fetch: flow(function*() {
      const res = yield fetch('/api/contacts');
      const contacts = yield res.json();
      self.list = contacts;
    }),

    remove:  flow(function *(id) {
      yield fetch(`/api/contacts/${id}`, {
        method: 'DELETE',
      });
      yield self.fetch()
    })

  }));

export default ContactList;
