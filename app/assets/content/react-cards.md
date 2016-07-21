### React Cards

I want my site to work like a single page application, but with multiple 
content areas. There are a few tutorials around about how to make div 
elements fill the whole screen using CSS animations. The trick is, the 
exact position must be known in order for the animation to work.

The Bootstrap grid system uses percentages. I created a React Card
element, which starts out using the grid system. On initial load, or 
when a resize occurs, the Card element calls a 'setPosition' method,
which tracks the element and page position:

```js
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
```

The expand state is set to true when a Card is clicked on. In the render
 method the Card content is set:
 
```js
    if (this.state.expand) {
        titlePadding = {paddingTop: this.props.heroImagePadding};
        divStyle = {
            left: this.state.dx,
            top: this.state.dy,
            width: this.state.expandedWidth,
            height: this.state.expandedHeight,
            transition: '0.8s',
        };
    }
```

and the element expands to fill the main content area.