const Mutations = {
  async createUser(parent, args, ctx, info) {
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args
      }
    }, info);
    return user;
  }
};

module.exports = Mutations;


