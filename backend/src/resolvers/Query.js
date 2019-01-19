const { forwardTo } = require('prisma-binding')

const Query = {
  products: forwardTo('db'),
  product: forwardTo('db'),
  brands: forwardTo('db'),
};

module.exports = Query;
