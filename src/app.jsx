var React = require('react');

// var PageStore = require('./stores/page')
// var pages = require('./pages');

var app = React.createClass({

	componentWillMount: function () {

		// window.addEventListener("hashchange", (e) => {
		// 	var hash = new URL(e.newURL).hash;
		// 	this.setState({
		// 		pageComponent: pages[hash.substring(1)] || React.createClass({render:function() { return <div>404 Page not found</div> }})
		// 	})
		// });
	},

	getInitialState: function () {
		return {
		};
	},

	render: function() {
		return (
			<div>
				<div id="video-warpper">
					<video autoPlay="autoplay" loop="loop" muted="muted" src="media/promo-2015-web-low.mp4"></video>
				</div>
				<div id="logo"></div>
				<div id="page">
					<div id="logo-sub">
						<img src="img/vr_logo_2017_bike_30.png" />
						<div>Est. 2013</div>
					</div>
					{/*<div className="nav">
						<ul>
							<li><a href="#pictures">	Billeder</a></li>
							<li><a href="#press">		Presse</a></li>
							<li><a href="#sponsors">	Sponsorer</a></li>
							<li><a href="#about">		Bestyrelsen</a></li>
							<li><a href="#contact">		Kontakt</a></li>
						</ul>
					</div>*/}
					<div className="content">
						<div className="social-media">
							<a target="_blank" href="https://www.facebook.com/vesterbro-ringridning"><img height="100" src="img/FB-f-Logo__blue_100.png" /></a>
							<a target="_blank" href="https://instagram.com/vesterbroringridning"><img height="100" src="img/glyph-logo_May2016.png" /></a>
						</div>
					</div>

				</div>
				<div id="footer">Vesterbro Ringridning © {new Date().getFullYear()} | CVR: 35575006</div>
			</div>
		);
	},

});

module.exports = app;