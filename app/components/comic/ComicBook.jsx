var React = require('react');
var ComicPage = require('./ComicPage.jsx');

class ComicBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Comic Book
                <ComicPage></ComicPage>
            </div>
        );
    }
}

module.exports = ComicBook;
