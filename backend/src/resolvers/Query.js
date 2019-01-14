const { forwardTo } = require('prisma-binding')
const Query = {
  products: forwardTo('db')
};

module.exports = Query;
