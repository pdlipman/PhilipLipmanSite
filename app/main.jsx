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
var reactCardMarkdown = './app/assets/content/react-cards.md';

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

class ResumePage extends React.Component {
    render() {
        return (
            <div className="container">
                <MarkdownPage
                    url={resumeMarkdown}>

                </MarkdownPage>
            </div>
        );
    }
}

class ReactCardsPage extends React.Component {
    render() {
        return (
            <div className="container">
                <MarkdownPage
                    url={reactCardMarkdown}>

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

var wrapComponent = function(Component, props) {
    console.log(props);
    return React.createClass({
        render: function() {
            return React.createElement(Component, props);
        }
    });
};

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={wrapComponent(Deck, {items: cardContent})}/>
            <Route path="resume" component={ResumePage}/>
            <Route path="react-cards" component={ReactCardsPage}/>
            <Route path="*" component={Deck}/>
        </Route>
    </Router>
), document.getElementById('content'));
