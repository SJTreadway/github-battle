var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState() {
        return {
            isLoading: true,
            playerInfo: []
        }
    },
    componentDidMount() {
        var query = this.props.location.query;
        // fetch info from github then update state
    },
    render() {
        return (
            <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
        )
    }
});

module.exports = ConfirmBattleContainer;