var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Model.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/carolinescheckout'
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection
};
