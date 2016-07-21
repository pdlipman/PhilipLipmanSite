/**
 * Created by philiplipman on 2/23/16.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var hashHistory = require('react-router').hashHistory;

var Deck = require('./components/card/Deck.jsx');
var cardContent = require('./assets/content/card-content.json');

var MarkdownPage = require('./components/markdownpage/MarkdownPage.jsx');

var resumeMarkdown = './app/assets/content/resume.md';

global.jQuery = require('jquery');

class App extends React.Component {
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="main-transition"
                    transitionAppear
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    <div
                        className="cover-container">
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>

            </div>
        );
    }
}

function Decks() {
    return (
        <div>
            <Deck
                items={cardContent}
            />

        </div>
    );
}

class ResumePage extends React.Component {
    render() {
        console.log(resumeMarkdown);

        return (
            <div className="container">
                <MarkdownPage
                    url={resumeMarkdown}>

                </MarkdownPage>
            </div>
        );
    }
}

var Game = new React.createClass({
    render: function () {
        return (
            <GameMain>
            </GameMain>

        );
    }
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Decks}/>
            <Route path="resume" component={ResumePage}/>
            <Route path="*" component={Decks}/>
        </Route>
    </Router>
), document.getElementById('content'));
