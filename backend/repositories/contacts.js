const client = require('../db');

class ContactsRepo {
  static async getAll() {
    const res = await client.query('SELECT * FROM contacts');
    return res.rows;
  }

  static async getById(id) {
    const res = await client.query('SELECT * FROM contacts WHERE id = $1', [
      id,
    ]);
    return res.rows[0];
  }

  static async create({email, phone, name}) {
    const res = await client.query(
      `INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3)
        RETURNING *`,
      [name, email, phone],
    );
    return res.rows[0];
  }

  static async update({id, email, phone, name}) {
    const res = await client.query(
      'UPDATE contacts SET (name, email, phone) = ($1, $2, $3) WHERE id = $4',
      [name, email, phone, id],
    );
    return res.rows[0];
  }

  static async delete({id}) {
    const res = await client.query('DELETE FROM contacts WHERE id = $1', [id]);
    return null;
  }
}

module.exports = ContactsRepo;
