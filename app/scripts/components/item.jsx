var React = require('react');
// var $ = require('jquery');
var Backbone = require('backbone');
// require('backbone-react-component');

var TemplateContainer = require('./template.jsx').TemplateContainer;
var OrderCollection = require('../models/item').OrderCollection;
var Order = require('../models/item').Order;

var menuItems= require('../data/menudata').menuItems;
// var Checkout = require('./order.jsx').OrderContainer;

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
//
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
    var orderCollection = new OrderCollection();
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
    var newOrder = new Order();
    var orderCollection = this.state.orderCollection;
    // orderCollection.save();
    // newOrder.set({items: orderCollection.toJSON()});
    newOrder.save([orderCollection]);
    // console.log(newOrder);

    orderCollection.reset([]);

    // this.setState({orderCollection: new OrderItemCollection});
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






// var ItemContainer = React.createClass({
//   mixins: [Backbone.React.Component.mixin],
//   getInitialState: function(){
//     var orderList = new OrderCollection();            //new menuModels.MenuCollection()
//     return {
//       orderList: orderList
//     }
//   },
//   handleItemClick: function(item){
//     console.log(item)
//     // var itemData = {title:item.title, price: item.price};
//     orderList.add({title: item.title, price: item.price});
//     console.log(orderList);
//     // console.log(itemData);
//     // var orderItem = item.toJSON();
//     // console.log(item.toJSON());
//     // this.state.orderList.add([orderItem]);
//     // this.setState({orderList: this.state.orderList});
//   },
//
//   render: function(){
//     var listofItems = menuData.map((item) =>{
//
//       var handleItemClick = this.handleItemClick.bind(this, item);
//       var title = item.title;
//       var description = item.content;
//       var price = item.price;
//
//     return(
//       <h2 className="menuTitle">Click Item to Add to Cart!</h2>
//       <li key={item.id} className='well listItems' onClick={handleItemClick}>
//         <div>
//           <p className="itemTitle">{title}</p>
//           <p className="itemDescription">{description}</p>
//           <p className="itemPrice">$ {price}0</p>
//         </div>
//       </li>
//     )
//   })
//
//   return (
//
//     <TemplateContainer>
//       <div className="row">
//           <ul className="col-md-8">
//             {listofItems}
//           </ul>
//       </div>
//
//       <div className="row">
//       <button onClick={this.handleClick} className="btn btn-primary backButton">Back</button>
//       </div>
//
//     </TemplateContainer>
//
//   )
// }
// });
//
// // <button onClick={this.handleClick} type="submit" className="btn btn-primary">Add Item to Order</button>
//
// // <div className="col-md-4">
// //   <Checkout orderList={this.state.orderList} />
// // </div>
//
// module.exports = {
//   ItemContainer: ItemContainer
// }
