var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var TemplateContainer = require('./template.jsx').TemplateContainer;
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
  handleClick: function(e){
    e.preventDefault();
    var router= this.props.router;

    router.navigate('', {trigger:true});
  },
  handleItemClick: function(item){
    console.log(item)
    // var orderItem = item.toJSON();
    // delete item.id
    // this.state.orderList.add([orderItem]);
    // this.setState({orderList: this.state.orderList});
  },
  render: function(){
      var listofItems = menuData.map((item) =>{

      var handleItemClick = this.handleItemClick.bind(this, item);
      var title = item.title;
      var description = item.content;
      var price = item.price;

    return(
      <li key={item.id} className='well listItems' onClick={handleItemClick}>
        <div>
          <p className="itemTitle">{title}</p>
          <p className="itemDescription">{description}</p>
          <p className="itemPrice">$ {price}0</p>
        </div>
      </li>
    )
  })

  return (

    <TemplateContainer>
      <div className="row">
        <h2 className="menuTitle">Click Item to Add to Cart!</h2>
          <ul className="col-md-8">
            {listofItems}
          </ul>
      </div>

      <div className="row">
      <button onClick={this.handleClick} className="btn btn-primary backButton">Back</button>
      </div>

    </TemplateContainer>

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
