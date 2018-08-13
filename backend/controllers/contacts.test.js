const Controller = require('./contacts');
const client = require('../db');

describe('Contacts Controller', () => {
  beforeEach(async () => {
    await client.query(`
    INSERT INTO contacts (id, name, phone, email) VALUES
      ('fd4a02bf-1fef-4a3d-8359-a1c85551122c', 'Anna', '123-456', 'anna@example.com'),
      ('25dc44e0-0a62-437b-a109-7aba92e81d38', 'Bob', '123-456', 'bob@example.com'),
      ('2c781488-3e16-4f3b-b263-cb171927d3e1', 'Cara', '123-456', 'cara@example.com');
    `);
  });

  afterEach(async () => {
    // Delete all data
    await client.query('DELETE FROM contacts');
  });

  describe('index', () => {
    it('retrieves all items from database', async () => {
      const ctx = {};
      await Controller.index(ctx);
      expect(ctx.body).toEqual([
        {
          id: 'fd4a02bf-1fef-4a3d-8359-a1c85551122c',
          name: 'Anna',
          phone: '123-456',
          email: 'anna@example.com',
        },
        {
          id: '25dc44e0-0a62-437b-a109-7aba92e81d38',
          name: 'Bob',
          phone: '123-456',
          email: 'bob@example.com',
        },
        {
          id: '2c781488-3e16-4f3b-b263-cb171927d3e1',
          name: 'Cara',
          phone: '123-456',
          email: 'cara@example.com',
        },
      ]);
    });
  });
  describe('get', () => {
    it('retrieves an items by ID database', async () => {
      const ctx = {params: {id: '25dc44e0-0a62-437b-a109-7aba92e81d38'}};
      await Controller.get(ctx);
      expect(ctx.body).toEqual({
        id: '25dc44e0-0a62-437b-a109-7aba92e81d38',
        name: 'Bob',
        phone: '123-456',
        email: 'bob@example.com',
      });
    });
  });
  describe('post', () => {
    it('creates item in database', async () => {
      const ctx = {
        request: {
          body: {name: 'Dina', phone: '1234234', email: 'dina@example.com'},
        },
      };
      await Controller.post(ctx);
      const id = ctx.body.id;
      const res = await client.query(`SELECT * FROM contacts WHERE id = $1`, [
        id,
      ]);
      expect(res.rows[0]).toEqual({
        id,
        name: 'Dina',
        phone: '1234234',
        email: 'dina@example.com',
      });
    });
    it('returns created item on body', async () => {
      const ctx = {
        request: {
          body: {name: 'Dina', phone: '1234234', email: 'dina@example.com'},
        },
      };
      await Controller.post(ctx);
      const id = ctx.body.id;
      expect(ctx.body).toEqual({
        id,
        name: 'Dina',
        phone: '1234234',
        email: 'dina@example.com',
      });
    });
  });
  describe('delete', () => {
    it('deletes an items by ID from database', async () => {
      const id = '25dc44e0-0a62-437b-a109-7aba92e81d38';
      const ctx = {params: {id}};
      await Controller.delete(ctx);
      const res = await client.query(`SELECT * FROM contacts WHERE id = $1`, [
        id,
      ]);
      expect(res.rows).toEqual([]);
    });
  });
  describe('put', () => {
    it('updates item in database', async () => {
      const id = '2c781488-3e16-4f3b-b263-cb171927d3e1';
      const ctx = {
        params: {id},
        request: {
          body: {
            name: 'Caroline',
            phone: '1234234',
            email: 'caroline@example.com',
          },
        },
      };
      await Controller.put(ctx);
      const res = await client.query(`SELECT * FROM contacts WHERE id = $1`, [
        id,
      ]);
      expect(res.rows[0]).toEqual({
        id: '2c781488-3e16-4f3b-b263-cb171927d3e1',
        name: 'Caroline',
        phone: '1234234',
        email: 'caroline@example.com',
      });
    });
  });
});
