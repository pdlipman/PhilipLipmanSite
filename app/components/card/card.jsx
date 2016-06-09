var React = require('react');
var ReactDOM = require('react-dom');

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            backgroundColor: props.backgroundColor,
            heroImage: props.heroImage,
            heroImagePadding: props.heroImagePadding,
            columnClass: props.columnClass,
            height: props.height,
            expand: props.expand,
            dx: props.dx,
            dy: props.dy,
            expandedWidth: props.expandedWidth,
            expandedHeight: props.expandedHeight,
            hideContent: props.hideContent,
            screenTop: props.screenTop,
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
        var refCard = this.refs.card;
        var node = ReactDOM.findDOMNode(refCard);
        var content = jQuery('#content'); // eslint-disable-line

        var top = content.offset().top -
            jQuery(window).scrollTop() - // eslint-disable-line 
            node.getBoundingClientRect().top;

        var left = content.offset().left - node.getBoundingClientRect().left;

        this.setState({
            dx: left,
            dy: top,
            expandedWidth: content.outerWidth(),
            expandedHeight: content.outerHeight(),
        });
    }

    handleExpand() {
        if (!this.state.expand) {
            var refCard = this.refs.card;
            var node = ReactDOM.findDOMNode(refCard);
            var getScreenTop = jQuery(window).scrollTop();
            console.log(getScreenTop);
            this.setState(
                {
                    expand: true,
                    screenTop: getScreenTop,
                });
            jQuery("html, body").animate({scrollTop: 0}, "slow");
        }
    }

    handleContract() {
        if (this.state.expand) {
            var refCard = this.refs.card;
            var node = ReactDOM.findDOMNode(refCard);
            var getScreenTop = this.state.screenTop;

            jQuery("html, body").animate({scrollTop: getScreenTop}, "slow");
            //jQuery("html, body").animate({scrollTop: node.getBoundingClientRect().top}, "slow");
            //jQuery(node).find('.card-content').animate({scrollTop: node.getBoundingClientRect().top}, "fast");
            console.log(getScreenTop);
            console.log(this.state.dy);

            this.setState(
                {
                    expand: false,
                });
        }
    }

    render() {

        var titlePadding = (this.props.height < this.props.heroImagePadding || this.props.hideContent)
            ? {paddingTop: '10'}
            : {paddingTop: this.props.heroImagePadding};
        var cardHolderStyle = {
            height: this.props.height,
        };

        var contentHideClass = this.props.hideContent ? 'card-interior card-interior-fade' : 'card-interior';

        var classes = this.state.expand
            ? 'card-start card-end '// + this.state.columnClass
            : 'card-start ';// + this.state.columnClass;

        var heroImage = this.props.heroImage ? this.props.heroImage : '';

        var divStyle = {
            height: this.props.height,
        };

        var closeStyle = {
            display: 'none',
        };

        if (this.state.expand) {
            titlePadding = {paddingTop: this.props.heroImagePadding};
            divStyle = {
                left: this.state.dx,
                top: this.state.dy,
                width: this.state.expandedWidth,
                height: this.state.expandedHeight,
            };

            closeStyle = {};
        }

        return (
            <div
                style={cardHolderStyle}
                className={"card-holder " + this.props.columnClass}
                ref="card">
                <div
                    style={divStyle}
                    className={classes}
                    onClick={this.handleExpand}>
                    <div
                        className={"card-content"}>
                        <div
                            className="card-background-image"
                            style={{
                                backgroundImage: heroImage,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100%",
                                backgroundColor: this.props.backgroundColor}}/>

                        <div
                            className={"main-card"}
                            style={{paddingTop: this.props.heroImagePadding}}>
                            <div
                                className="cover-heading"
                                style={titlePadding}>
                                <h3>
                                    {this.props.title}
                                </h3>
                            </div>
                            <div className={contentHideClass}
                                 style={{backgroundColor: this.props.backgroundColor}}>
                                <div
                                    className={"card-close"}>
                                    <i className="fa fa-times-circle fa-fade"
                                       onClick={this.handleContract}></i>
                                </div>
                                <div className="card-block">
                                    <div className="card-text">
                                        {this.props.children}
                                    </div>
                                    <p>
                                        {JSON.stringify(this.state, null, 4)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}

//title: props.title,
//    backgroundColor: props.backgroundColor,
//    heroImage: props.heroImage,
//    heroImagePadding: props.heroImagePadding,
//    columnClass: props.columnClass,
//    height: props.height,
//    expand: props.expand,
//    dx: props.dx,
//    dy: props.dy,
//    expandedWidth: props.expandedWidth,
//    expandedHeight: props.expandedHeight,

Card.propTypes = {
    title: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    heroImage: React.PropTypes.string,
    heroImagePadding: React.PropTypes.number,
    columnClass: React.PropTypes.string,
    height: React.PropTypes.number,
    expand: React.PropTypes.bool,
    dx: React.PropTypes.number,
    dy: React.PropTypes.number,
    expandedWidth: React.PropTypes.number,
    expandedHeight: React.PropTypes.number,
    children: React.PropTypes.node,
    hideContent: React.PropTypes.bool,
};

Card.defaultProps = {
    title: '',
    backgroundColor: '#263248',
    heroImage: '',
    heroImagePadding: 0,
    columnClass: "col-sm-4",
    height: 200,
    expand: false,
    dx: 0,
    dy: 0,
    expandedWidth: 0,
    expandedHeight: 0,
    hideContent: false,
};

module.exports = Card;
