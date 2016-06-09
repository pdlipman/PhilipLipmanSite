var React = require('react');
var Markdown = require('react-remarkable');
var hljs = require('highlight.js') // https://highlightjs.org/
var Card = require('./card.jsx');

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        }
    }

    render() {
        var cards = this.props.items.map(function (card) {
            var content = null;
            jQuery.ajax({
                'type': 'GET',
                'url': card.content,
                'async': false,
                'success': function (data) {
                    content = data;
                },
            });

            return (
                <Card
                    key={card.key}
                    title={card.title}
                    backgroundColor={card.backgroundColor}
                    columnClass={card.columnClass}
                    heroImage={card.heroImage}
                    heroImagePadding={card.heroImagePadding}
                >
                    <Markdown
                        options={{
                            highlight: function (str, lang) {
                                if (lang && hljs.getLanguage(lang)) {
                                    try {
                                        return hljs.highlight(lang, str).value;
                                    } catch (err) {}
                                }

                                try {
                                    return hljs.highlightAuto(str).value;
                                } catch (err) {}

                                return ''; // use external default escaping
                            }
                        }}>
                        {content}
                    </Markdown>
                </Card>
            );


        }, this);

        return (
            <div
                className={"row"}
            >
                <h1 style={{color: "#ECF0F1"}}>Hey Now</h1>
                {cards}
            </div>
        );
    }
}

Deck.propTypes = {};

Deck.defaultProps = {};

module.exports = Deck;
