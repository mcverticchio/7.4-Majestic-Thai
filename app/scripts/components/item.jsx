var React = require('react');
var Backbone = require('backbone');

var TemplateContainer = require('./template.jsx').TemplateContainer;
var OrderCollection = require('../models/item').OrderCollection;
var OrderModel = require('../models/item').Order;
var OrderItemCollection = require('../models/item').OrderItemCollection;

var menuItems= require('../data/menudata').menuItems;

var Order = React.createClass({
  render: function(){
    var order = this.props.orderCollection.map(function(orderItem){
      return(
        <li key={orderItem.id}>
          {orderItem.get('title')} :: {orderItem.get('price')}
          <button className="btn btn-danger" onClick={function(){self.props.removeItem(orderItem)}}>Remove</button>
        </li>
      );
    });

    return (
      <div className="col-md-4">
        <h2 className="orderHeading">Your Order(s):</h2>
        <ul>
          {order}
        </ul>
        <strong>Total:</strong>{this.props.orderCollection.total()}
        <div className="row">
          <button onClick={this.props.placeOrder} className="btn btn-warning">Place Order</button>
        </div>
      </div>
    )
  }
});


var Menu = React.createClass({
  render: function(){
    var self = this;
    var menu = menuItems.map(function(item){
      return(
          <li key={item.id} className='well listItems'>
            <div>
              <p className="itemTitle">{item.title}</p>
              <p className="itemDescription">{item.content}</p>
              <p className="itemPrice">${item.price}0</p>
            </div>
            <button onClick={function(){self.props.addToOrder(item)}} className="btn btn-success addToCartBtn">Add to Cart</button>
          </li>
      );
    });
    return (
      <div>
        <h2 className="menuTitle">Click Item to Add to Cart!</h2>
          <ul className="col-md-8">
            {menu}
          </ul>
      </div>
    );
  }
});


var OrderingContainer = React.createClass({
  getInitialState: function(){
    var orderCollection = new OrderItemCollection();
    return {
      orderCollection: orderCollection
    }
  },
  addToOrder: function(item){

    var orderCollection = this.state.orderCollection;
    var orderItem = item;
    console.log(orderCollection);

    delete orderItem.id;
    orderCollection.add([orderItem]);

    this.setState({orderCollection: orderCollection});
  },
  handleClick: function(e){
    e.preventDefault();
    var router= this.props.router;

    router.navigate('', {trigger:true});
  },
  placeOrder: function(){
    var newOrder = new OrderModel();
    var orderCollection = this.state.orderCollection;
    newOrder.set({items: orderCollection.toJSON()});
    newOrder.save();

    orderCollection.reset([]);

    this.setState({orderCollection: new OrderItemCollection});
  },

  render: function(){
    return(
      <TemplateContainer>
        <div className="row">
          <Menu  addToOrder={this.addToOrder}/>
          <Order placeOrder={this.placeOrder} orderCollection={this.state.orderCollection}/>
        </div>

        <div className="row">
          <button onClick={this.handleClick} className="btn btn-primary backButton">Back</button>
        </div>
      </TemplateContainer>
    )
  }
});



module.exports = {
  OrderingContainer: OrderingContainer
};
