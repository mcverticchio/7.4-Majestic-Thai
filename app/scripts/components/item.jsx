var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var OrderCollection = require('../models/item').OrderCollection;
var menuData = require('../data/menudata').menuItems;


var ItemContainer = React.createClass({
  // mixins: [Backbone.React.Component.mixin],
  render: function(){
    var listofItems = menuData.map((item) =>{

      var title = item.title;
      var description = item.content;
      var price = item.price;

    return(
      <li key={item.id} className='well'>
        <div>
          <p className="menuTitle">{title}</p>
          <p className="menuDescription">{description}</p>
          <p className="menuPrice">$ {price}0</p>
          <button type="submit" className="btn btn-primary">Add Item to Cart</button>
        </div>
      </li>
    )
  })

  return (
    <ul className="col-md-8">
      {listofItems}
    </ul>
  )
}
});


module.exports = {
  ItemContainer: ItemContainer
}
