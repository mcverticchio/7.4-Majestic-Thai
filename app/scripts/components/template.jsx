var React = require('react');

// <div className="logo"></div>
var TemplateContainer = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row mainHeader">
          <div className="topTapestry"></div>
            <header className="col-md-12 heading">
              <h1 className="mainHeading">
                Majestic Thai
              </h1>

              <div className="socialMediaIcons">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </header>
          </div>

        <div className="row">
          <div col-md-12>
            <div className="mainImg"><span className="headerText">Authentic Thai Food</span></div>
          </div>
        </div>

        {this.props.children}

        <div className="row footer">
          <div className="col-md-12">
            <footer>
              <h5>Contact Information</h5>
                <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                <span className="email">majesticthai@email.com</span>
                <span className="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
                <span>(888)888-8888</span>
                <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                <span>1234 Main Street Greenville, SC 00000</span>
            </footer>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = {
  TemplateContainer: TemplateContainer
}
