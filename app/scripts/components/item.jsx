var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
require('backbone-react-component');

var OrderCollection = require('../models/item').OrderCollection;
var TemplateComponent = require('./template.jsx').TemplateContainer;


var Item = React.createClass({
  render: function(){
    return(
    )
  }
})



var ItemContainer : React.createClass({
  render: function(){
    return(
    <templateContainer>
      <Item router={this.props.router}/>

    </templateContainer>
   )
  }
})


// module.exports = {
//   ItemContainer: ItemContainer
// }
