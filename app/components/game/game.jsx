/**
 * Created by philiplipman on 1/29/16.
 */
const React = require('react');

const Boot = require('./states/boot.jsx');
const Preloader = require('./states/preloader.jsx');
const GenerateLevel = require('./states/generate-level.jsx');
// var World = require('./states/world');
// var Lighting = require('./states/lighting');


// var Phaser = require('./phaser/phaser.js');
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width,
            height: props.height,
        };
    }

    componentDidMount() {
        this.createGame(this.props.width, this.props.height);
    }

    createGame(width, height) {
        const game = new Phaser.Game(width, height, Phaser.AUTO, 'gameMain'); // eslint-disable-line

        game.state.add('boot', Boot);
        game.state.add('preloader', Preloader);
        game.state.add('generate', GenerateLevel);

        game.state.start('boot');
    }

    render() {
        return (
            <div
                className="gameMain"
                id="gameMain"
            >
            </div>
        );
    }
}

Game.propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
};

Game.defaultProps = {
    width: 720,
    height: 720,
};

module.exports = Game;
