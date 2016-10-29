var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');

var OrderCollection = require('./models/item').OrderCollection;
var TemplateContainer = require('./template.jsx').TemplateContainer;
var ItemContainer = require('./item.jsx').ItemContainer;

var OrderContainer = React.createClass({
  render: function(){
    return(

    )
  }
})


var SecondScreenContainer = React.createClass({
  render: function(){
    return(
      <TemplateContainer>
        <ItemContainer />
        <OrderContainer />
      </TemplateContainer>
    )
  }
});

// module.exports = {
//   SecondScreenContainer: SecondScreenContainer
// }
