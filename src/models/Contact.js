import {getParent, types} from 'mobx-state-tree';

const Contact = types
  .model('Contact', {
    id: types.identifier,
    name: types.string,
    email: types.string,
    phone: types.string,
  })
  .actions(self => ({
    remove() {
      getParent(self, 2).remove(self.id);
    },
  }));

export default Contact;
