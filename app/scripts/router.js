var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var OrderingContainer = require('./components/item.jsx').OrderingContainer;
var InfoPageComponent = require('./components/infopage.jsx').InfoPageComponent;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'menu/': 'menu'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(InfoPageComponent, {router:this}),
      document.getElementById('app')
    );
  },
  menu: function(){
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
