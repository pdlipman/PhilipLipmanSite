/**
 * Created by philiplipman on 2/23/16.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const IndexRoute = require('react-router').IndexRoute;

const Card = require('./components/card/card.jsx');
const GameMain = require('./components/game/game.jsx');

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
                    transitionLeaveTimeout={300}
                >

                    <div
                        className="cover-container">
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>

            </div>
        );
    }
}

function Deck() {
    return (
        <div>
            <div className="row">
                <Card
                    columnClass="col-sm-12"
                >
                    <div>
                        <h1 className="cover-heading">Cover your page.</h1>
                        <p className="lead">Cover is a one-page template for building simple and
                            beautiful
                            home
                            pages. Download,
                            edit the text, and add your own fullscreen
                            background photo to make it your
                            own.
                        </p>
                        <p className="lead">
                            <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                        </p>
                        <div className="container">
                            Card 0
                        </div>
                    </div>
                </Card>
            </div>
            <div className="row">
                <Card
                    columnClass="col-sm-6"
                    height={440}
                >
                    <Index />
                </Card>
                <Card
                    columnClass="col-sm-6"
                    height={440}
                >
                </Card>
            </div>
        </div>
    );
}

function Index() {
    return (
        <div>
            <h1>Index</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br />
                I run a pretty tight ship around here. With a pool table.
                It's a gaming ship. I know, I just call
                her Annabelle
                cause she's shaped like a…she's the belle of the ball!

                Look at us, crying like a bunch of girls on the last day of camp.
                And guess what else is back. [slow
                wink] My
                breakfast? My friskiness. Mama horny Michael. Could it be love?
                I know what an erection feels like,
                Michael. No,
                it's the opposite. It's like my heart is getting hard.

                That was Tom Cruise, the actor. Lucille: They said he was some
                kind of scientist. If that man's
                straight, then I
                am sober.

                If I look like a man who made love to his wife last night –
                it's because I almost did. Don't worry,
                these young
                beauties have been nowhere near the bananas. I need a fake
                passport, preferably to France…I like the
                way they
                think.

                What, so the guy we are meeting with can't even grow his
                own hair? COME ON! Chickens don't clap!
                Hey, it was one
                night of wild passion! Michael: And yet you didn't
                notice her body? Gob: I like to look in the
                mirror. We need a
                name. Maybe 'Operation Hot Mother'. There's a girl in my soup!
                You stay on top of her, Buddy. Don't
                be afraid to
                ride her. Hard. Actually, that was a box of Oscar's legally
                obtained medical marijuana. Primo bud.
                Real sticky
                weed. I think that's one of Mom's little fibs, you know,
                like I'll sacrifice anything for my
                children.
            </p>
        </div>
    );
}

const Game = new React.createClass({
    render: function () {
        return (
            <GameMain>
            </GameMain>

        );
    }
});

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Deck}/>
            <Route path="game" component={Game}/>
            <Route path="*" component={Deck}/>
        </Route>
    </Router>
), document.getElementById('content'));
