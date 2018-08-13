import {types} from 'mobx-state-tree';

const Contact = types.model('Contact', {
  id: types.identifier,
  name: types.string,
  email: types.string,
  phone: types.string,
});

export default Contact;
