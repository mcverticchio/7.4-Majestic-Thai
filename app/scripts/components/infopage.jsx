var React = require('react');

var TemplateContainer = require('./template.jsx').TemplateContainer;

var InfoPageComponent = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.navigate('menu/', {trigger: true});
  },
  render: function(){
    return(
    <TemplateContainer>
    <div>
    <div className="col-md-12">
    <p>
      We invite you to celebrate refined Thai cuisine and an invigorating dining experience in the heart of Greenville, SC.
      Majestic Thai is the realization of the lifelong dream of [insert client name here].
      The duo has married hard work with passion to bring authentic Thai cuisine to the area.
      Majestic Thai's infectious atmosphere centers around a dynamic kitchen as the sound of heat to metal, blade to board and liquid to flame resonate throughout the restaurant.
      The establishment offers a speedy to-go service to accomodate customers who prefer to eat in the privacy of their home.
    </p>
    </div>

    <div className="col-md-4">
      “BEST I'VE EVER HAD”
      Great staff, and the food makes my mouth water just thinking about it writing this. I had the Seafood Hot Sour Soup and the Red Curry Duck! Sensational!
      ― David
    </div>

    <div className="col-md-4">
      “LOVED IT”
      Convinced my husband to try something new for lunch today. Absolutely loved it. The staff was welcoming and efficient and the food was fantastic. We will be back again.
      ― Joyce
    </div>

    <div className="col-md-4">
      “DELICIOUS”
      We had great service and a truly enjoyable evening. The dishes were delicious and large (with enough for leftovers!).
      ― Morgan
    </div>

    <button onClick={this.handleSubmit} classNameName="btn btn-primary">View Menu Items</button>
    </div>

    </TemplateContainer>
   )
  }
});



module.exports = {
  InfoPageComponent: InfoPageComponent
}
