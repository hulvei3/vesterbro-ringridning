var React = require('react');

var sponsors = React.createClass({ displayName: 'Page.sponsors',

	render: function() {
		return (
			<div>
				<p>Vores sponsorer er direkte medvirkende til at Vesterbro Ringridning kan blive en realitet år efter år. Vi kunne ikke gøre det uden dem!</p>
					<div className="sponsor-list">
						
						<a href="http://www.danfoss.com/Denmark/AboutUs/Foundations/Fabrikant+Mads+Clausens+Fond/" target="_blank">
							<img src="img/logo-danfoss.png?1437517617488"/></a>
						<a href="http://alsieexpress.dk/" target="_blank">
							<img src="img/logo-alsieexpress.png?1437517617488"/></a>
						<a href="http://dk.ecco.com/" target="_blank">
							<img src="img/logo-ecco.png?1437517617488"/></a>
						<a href="http://ronhaveslagteren.dk/" target="_blank">	
							<img src="img/logo-roenhaveslagteren.png?1437517617488"/></a>
						<a href="http://www.shopisyd.dk" target="_blank">
							<img src="img/logo-sdbghandel2.jpg?1437517617488"/></a>
						<a href="http://www.sydbank.dk" target="_blank">
							<img src="img/logo-sydbank.png"/></a>
					</div>

					Øvrige bidragsydere
					<ul>
						<li>Linak</li>
						<li>Landmand Hans Michelsen, Solbakkegaard</li>
						<li>Skovby Ringridning</li>
						<li>Birthe Andersen & Jacob Fuchs</li>
					</ul>
			</div>
		);
	}

});

module.exports = sponsors;