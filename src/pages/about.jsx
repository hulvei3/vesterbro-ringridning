var React = require('react');

var about = React.createClass({ displayName: 'Page.about',

	render: function() {
		return (<div>
			<p>Vesterbro Ringridnings bestyrelse består af sønderjyske ildsjæle med et glimt i øjet.</p>
			<img src="media/people.jpg" style={{width: '100%'}}/>
			<ul>
				<li>Jakob Jakobsen Boysen</li>
				Opvokset ved Nordborg. Jakob er uddannet softwareingeniør fra Danmarks Tekniske Universitet 2014, og arbejder ved Novo Nordisk.
				<li>Sara Stricker</li>
				Opvokset i Bovrup. Sara studerer til sygeplejeske på Diakonissestiftelsens Sygeplejeskole.
				<li>Christian Michelsen</li>
				Fra Lysabild på Als. Christian er i øjeblikket i gang med at færdiggøre sin ingeniøruddannelse i mekanik og konstruktion på Danmarks Tekniske Universitet.
				<li>Philip Hansen Frank</li>
				Opvokset i Dybbøl. Philip studerer informationsvidenskab og kulturformidling på Københavns Universitet, og som studiejob arbejder han på Rigshospitalets arkiv.
				<li>Anne Zachariassen</li>
				Opvokset på Vestermarken tæt på Felsted. Netop færdig med sin kandidat i Global Studies på Roskilde Universitet, og bor for tiden i Geneve.
				<li>Morten Hulvej Andersen</li>
				Opvokset i Dyndved på Als. Morten er uddannet softwareingeniør fra Danmarks Tekniske Universitet 2013, og arbejder som ved e-conomic International.
			</ul>
		</div>);
	}

});

module.exports = about;