var React = require('react');
var Markdown = require('react-remarkable');
var hljs = require('highlight.js') // https://highlightjs.org/

class MarkdownPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    loadMarkdownFromServer() {
        var that = this;
        if(that.props.url) {
            jQuery.ajax({
                'type': 'GET',
                'url': that.props.url,
                'async': false,
                'success': function (data) {
                    that.setState({data: data});
                },
                'error': function (xhr, status, err) {
                    console.error(that.props.url, status, err.toString());
                }
            });
        }
    }

    componentDidMount() {
        this.loadMarkdownFromServer();
    }

    render() {
        return (
            <Markdown
                options={{
                            html: true,
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
                {this.state.data}
            </Markdown>
        );
    }
}



module.exports = MarkdownPage;