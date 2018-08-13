import ContactList from './ContactList';

describe('ContactList Model', () => {
  let contactList;

  beforeEach(() => {
    contactList = ContactList.create({});
  });

  it('can add contact', () => {
    contactList.add({
      name: 'Joe Blogs',
      email: 'joe@example.com',
      phone: '1234-5678',
    });

    expect(contactList.list.length).toBe(1);
  });

  it('does not add contact if has empty fields', () => {
    contactList.add({
      name: 'Joe Blogs',
      email: '',
      phone: '',
    });

    expect(contactList.list.length).toBe(0);
  });
  it('creates an ID for added contact', () => {
    contactList.add({
      name: 'Joe Blogs',
      email: 'joe@example.com',
      phone: '1234-5678',
    });

    expect(contactList.list[0].id).toBeTruthy();
  });
});
