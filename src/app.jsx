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
							<li><a href="#about">		Bestyrelsen</a></li>
						</ul>
						<ul>
							<li><a href="#contact">		Kontakt</a></li>
							<li><a href="#press">		Presse</a></li>
							<li><a href="#sponsors">	Sponsorer</a></li>
						</ul>
					</div>
					<div className="content">
						<CurrentPage />
					</div>

					<div className="fb-page" data-href="https://www.facebook.com/VesterbroRingridning" data-width="300" data-height="800" data-hide-cover="true" data-show-facepile="true" data-show-posts="true"><div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/VesterbroRingridning"><a href="https://www.facebook.com/VesterbroRingridning"></a></blockquote></div></div>
				</div>
			</div>
		);
	},

});

module.exports = app;