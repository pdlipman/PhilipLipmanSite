I want my site to work like a single page application, but with multiple 
content areas. There are a few tutorials around about how to make div 
elements fill the whole screen using CSS animations. The trick is, the 
exact position must be known in order for the animation to work.

The Bootstrap grid system uses percentages. I created a React Card
element, which starts out using the grid system. On initial load, or 
when a resize occurs, the Card element calls a 'setPosition' method,
which tracks the element and page position.<br/>
<a class="resume-link" href="./#/react-cards"><i class="fa fa-file fa-hover-helper fa-page fa-page-link"></i><span class="resume-link-text">Read More...</span></a> <br/>