var React = require('react');

var home = React.createClass({ displayName: 'Page.home',

	render: function() {
		return (<div>
			<p>Vesterbro Ringridning er en frivillig forening, hvis formål bl.a. er at afholde et årligt tilbagevendende (cykel)ringrider arrangement på Vesterbro i København. Foreningen blev grundlagt i 2013 og er sidenhen blevet en fast del af Vesterbros mange kulturelle arrangementer.</p>

			<p>Ringridning er først og fremmest en gammel sønderjysk tradition. En sport, hvor man rider på heste og fanger ringe, der hænger fra galger med hjælp af en lanse. Sporten har rødder i gamle ridderturneringer fra middelalderen, og er en fast del af enhver sønderjysk by - stor og lille. Vinderne, en konge og en dronning kåres ved optælling af ringe.</p>

			<p>Cykelringridning er ligesom ringridning også en gammel tradition under samme koncept, bare på cykel. Her er ikke mindst også udsmykning af cyklerne en stor del af konkurrencen.</p>
		</div>);
	}

});

module.exports = home;