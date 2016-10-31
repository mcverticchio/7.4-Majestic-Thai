var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/carolinescheckout'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/carolinescheckout',
  total: function(){
    return this.reduce(function(sum, model){
      return sum + parseFloat(model.get('price'));
    }, 0);
  }
});


var OrderItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderItemCollection = Backbone.Collection.extend({
  model: OrderItem,
  total: function(){
    return this.reduce(function(sum, model){
      return sum + parseFloat(model.get('price'));
    }, 0);
  }
});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection,
  OrderItem: OrderItem,
  OrderItemCollection: OrderItemCollection
};
