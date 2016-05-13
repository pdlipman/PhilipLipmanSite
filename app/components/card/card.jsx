const React = require('react');
const ReactDOM = require('react-dom');

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: props.expand,
            columnClass: props.columnClass,
            height: props.height,
            dx: props.dx,
            dy: props.dy,
            expandedWidth: props.expandedWidth,
            expandedHeight: props.expandedHeight,
        };

        this.handleExpand = this.handleExpand.bind(this);
        this.handleContract = this.handleContract.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }

    componentDidMount() {
        this.setPosition();
        window.addEventListener('resize', this.setPosition);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setPosition);
    }

    setPosition() {
        const refCard = this.refs.card;
        const node = ReactDOM.findDOMNode(refCard);
        const content = jQuery('#content'); // eslint-disable-line

        const top = content.offset().top -
            jQuery(window).scrollTop() - // eslint-disable-line 
            node.getBoundingClientRect().top;

        const left = content.offset().left - node.getBoundingClientRect().left;

        this.setState({
            dx: top,
            dy: left,
            expandedWidth: content.outerWidth(),
            expandedHeight: content.outerHeight(),
        });
    }

    handleExpand() {
        if (!this.state.expand) {
            this.setState(
                {
                    expand: true,
                });
        }
    }

    handleContract() {
        if (this.state.expand) {
            this.setState(
                {
                    expand: false,
                });
        }
    }

    render() {
        const classes = this.state.expand
            ? 'card-start card-end '// + this.state.columnClass
            : 'card-start ';// + this.state.columnClass;

        const cardHolderStyle = {
            //width: this.state.width,
            height: this.state.height,
        };

        let divStyle = {
            //width: this.state.width,
            height: this.state.height,
        };

        let closeStyle = {
            display: 'none',
        };

        if (this.state.expand) {
            divStyle = {
                top: this.state.dx,
                left: this.state.dy,
                width: this.state.expandedWidth,
                height: this.state.expandedHeight,
            };

            closeStyle = {};
        }

        return (
            <div
                style={cardHolderStyle}
                className={"card-holder " + this.state.columnClass}
                ref="card"
            >
                <div
                    style={divStyle}
                    className={classes}
                    onClick={this.handleExpand}
                >
                    <div className={"card-content"}>
                        <img
                            className="card-img-top"
                            data-src="holder.js/100px180/?text=Image cap"
                            alt="Card cap"
                        />
                        <div
                            className={"card-close card-text"}
                            onClick={this.handleContract}
                        >
                            <i className="fa fa-times fa-border" aria-hidden="true"></i>
                        </div>
                        <div className="card-block">
                            <div className="card-text">
                                {this.props.children}
                            </div>
                        </div>
                        <p>
                            {JSON.stringify(this.state, null, 4)}
                        </p>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

Card.propTypes = {
    expand: React.PropTypes.bool,
    columnClass: React.PropTypes.string,
    height: React.PropTypes.number,
    dx: React.PropTypes.number,
    dy: React.PropTypes.number,
    expandedWidth: React.PropTypes.number,
    expandedHeight: React.PropTypes.number,
    children: React.PropTypes.node,
};

Card.defaultProps = {
    expand: false,
    columnClass: "col-sm-4",
    height: 200,
    dx: 0,
    dy: 0,
    expandedWidth: 0,
    expandedHeight: 0,
};

module.exports = Card;
