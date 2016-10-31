var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var OrderingContainer = require('./components/item.jsx').OrderingContainer;
var InfoPageComponent = require('./components/infopage.jsx').InfoPageComponent;
// var SecondScreenContainer = require('./components/order.jsx').SecondScreenContainer;
// var OrderCollection = require('./models/item').OrderCollection;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'menu/': 'menu'
  },
  index: function(){
    // console.log(this);

    ReactDOM.render(
      React.createElement(InfoPageComponent, {router:this}),
      document.getElementById('app')
    );
  },
  menu: function(){
    // console.log('menu route');
    ReactDOM.render(
      React.createElement(OrderingContainer, {router:this}),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.exports = {
  router
};
