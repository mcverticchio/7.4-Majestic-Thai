var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var InfoPageComponent = require('./components/infopage.jsx').InfoPageComponent;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    console.log(this);

    ReactDOM.render(
      React.createElement(InfoPageComponent, {router:this}),
      document.getElementById('app')
    );
  },
});

var router = new AppRouter();

module.exports = {
  router
};
