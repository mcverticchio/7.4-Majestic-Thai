var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var OrderCollection = require('../models/item').OrderCollection;
var menuData = require('../data/menudata').menuItems;
var Checkout = require('./order.jsx').OrderContainer;

var ItemContainer = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    var orderList = new OrderCollection();
    return {
      orderList: orderList
    }
  },
  handleItemClick: function(item){
    console.log(item)
    // var orderItem = item.toJSON();
    delete item.id
    // //
    // this.state.orderList.push({item});
    // this.setState({orderList: this.state.orderList});
  },
  render: function(){
      var listofItems = menuData.map((item) =>{

      var handleItemClick = this.handleItemClick.bind(this, item);
      var title = item.title;
      var description = item.content;
      var price = item.price;

    return(
      <li key={item.id} className='well' onClick={handleItemClick}>
        <div>
          <p className="menuTitle">{title}</p>
          <p className="menuDescription">{description}</p>
          <p className="menuPrice">$ {price}0</p>
        </div>
      </li>
    )
  })

  return (
  <div>
    <ul className="col-md-8">
      {listofItems}
    </ul>

  </div>
  )
}
});

// <button onClick={this.handleClick} type="submit" className="btn btn-primary">Add Item to Order</button>

// <div className="col-md-4">
//   <Checkout orderList={this.state.orderList} />
// </div>
module.exports = {
  ItemContainer: ItemContainer
}
