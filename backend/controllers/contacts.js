const ContactRepo = require('../repositories/contacts');

module.exports = {
  async index(ctx) {
    ctx.body = await ContactRepo.getAll();
  },

  async get(ctx) {
    const id = ctx.params.id;
    const contact = await ContactRepo.getById(id);
    ctx.body = contact;
  },

  async post(ctx) {
    const {email, phone, name} = ctx.request.body;
    ctx.body = await ContactRepo.create({email, name, phone});
  },
  async put(ctx) {
    const id = ctx.params.id;
    const {email, phone, name} = ctx.request.body;
    ctx.body = await ContactRepo.update({id, email, phone, name});
  },

  async delete(ctx) {
    const id = ctx.params.id;
    ctx.body = await ContactRepo.delete({id});
  },
};
