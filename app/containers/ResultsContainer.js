var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState() {
        return {
            isLoading: true,
            scores: []
        }
    },
    componentDidMount() {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then((scores)=> {
            this.setState({
                scores: scores,
                isLoading: false
            })
        })
    },
    render() {
        return (
            <Results 
            isLoading={this.state.isLoading} 
            scores={this.state.scores} 
            playersInfo={this.props.location.state.playersInfo} />
        )
    }
});
        
module.exports = ResultsContainer;