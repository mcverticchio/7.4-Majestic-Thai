var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  idAttribute: '_id'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
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
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/carolinescheckout',

});

module.exports = {
  Order: Order,
  OrderCollection: OrderCollection,
  OrderItem: OrderItem,
  OrderItemCollection: OrderItemCollection
};
