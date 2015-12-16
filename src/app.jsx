var React = require('react');

// var PageStore = require('./stores/page')
var pages = require('./pages');

var app = React.createClass({

	componentWillMount: function () {

		window.addEventListener("hashchange", (e) => {
			var hash = new URL(e.newURL).hash;
			this.setState({
				pageComponent: pages[hash.substring(1)] || React.createClass({render:function() { return <div>404 Page not found</div> }})
			})
		});
	},

	getInitialState: function () {
		return {
			pageComponent: pages['home']
		};
	},

	render: function() {
		var CurrentPage = this.state.pageComponent;
		return (
			<div>
				<div id="fb-root"></div>
				<div id="banner"></div>
				<div id="page">
					<hr />
					<a href="#home"><h1 id="headline">Vesterbro Ringridning</h1></a>
					<div className="nav">
						<ul>
							<li><a href="#pictures">	Billeder</a></li>
							<li><a href="#press">		Presse</a></li>
							<li><a href="#sponsors">	Sponsorer</a></li>
							<li><a href="#about">		Bestyrelsen</a></li>
							<li><a href="#contact">		Kontakt</a></li>
						</ul>
					</div>
					<div className="content">
						<CurrentPage />
					</div>

					<footer>
						<hr />
						© Vesterbro Ringridning est. 2013 | CVR: 35575006
					</footer>

				</div>
				<div className="fb-container">
					<div className="fb-page" data-href="https://www.facebook.com/vesterbro-ringridning" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/vesterbro-ringridning"><a href="https://www.facebook.com/vesterbro-ringridning">Vesterbro Ringridning</a></blockquote></div></div>
				</div>
			</div>
		);
	},

});

module.exports = app;