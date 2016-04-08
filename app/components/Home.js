var React = require('react');
var transparentBG = require('../styles').transparentBG;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render() {
        return (
            <div 
                className="jumbotron col-sm-12 text-center" 
                style={transparentBG}>
                <h1>Github Battle</h1>
                <p className="lead">Do ya feel lucky, punk?</p>
            <Link to="/playerOne">
                <button className="btn btn-lg btn-success">Get Started</button>
            </Link>
            </div>
        )
    }
});

module.exports = Home;