import ContactList from './ContactList';

describe('ContactList Model', () => {
  let contactList;

  beforeEach(() => {
    contactList = ContactList.create({});
  });

  afterEach(() => {
    fetch.resetMocks()
  })

  it('can add contact', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      id: '1234',
      name: 'Joe Blogs',
      email: 'joe@example.com',
      phone: '1234-5678',
    }))

    await contactList.add({
      name: 'Joe Blogs',
      email: 'joe@example.com',
      phone: '1234-5678',
    });

    expect(contactList.list.length).toBe(1);
  });

  it('does not attempt add contact if has empty fields', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      id: '1234',
      name: 'Joe Blogs',
      email: '',
      phone: '',
    }))

    await contactList.add({
      name: 'Joe Blogs',
      email: '',
      phone: '',
    });

    expect(contactList.list.length).toBe(0);
  });

  it('creates an ID for added contact', async () => {
    fetch.mockResponseOnce(JSON.stringify({
      id: '1234',
      name: 'Joe Blogs',
      email: 'joe@example.com',
      phone: '1234-5678',
    }))

    await contactList.add({
      name: 'Joe Blogs',
      email: 'joe@example.com',
      phone: '1234-5678',
    });

    expect(contactList.list[0].id).toBe('1234');
  });
});
