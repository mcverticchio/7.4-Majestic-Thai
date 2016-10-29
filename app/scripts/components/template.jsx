var React = require('react');

var TemplateContainer = React.createClass({
  render: function(){
    return (
    <div>
      <div className="container mainHeader">
        <div className="row">
          <header className="col-md-12 heading">
            <h1 className="mainHeading">
              Majestic Thai
            </h1>
          </header>
          <div className="mainImg"><span>Authentic Thai Food</span></div>
        </div>
      </div>

        {this.props.children}

          <footer>
            <h5>Contact Information</h5>
            <span>majesticthai@email.com</span>
            <span>(888)888-8888</span>
            <span>1234 Main Street Greenville, SC 00000</span>
          </footer>
      </div>
    );
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}
