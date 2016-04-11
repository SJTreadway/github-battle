var React = require('react');
var transparentBG = require('../styles').transparentBG;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
    render() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead">Do ya feel lucky, punk?</p>
                <Link to="/playerOne">
                    <button className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </MainContainer>
        )
    }
});

module.exports = Home;