var React = require('react');

var contact = React.createClass({ displayName: 'Page.contact',

	render: function() {
		return (
			<div>
				<div>
					<b>Vesterbro Ringridning</b><br/>
					c/o Morten Hulvej Andersen<br/>
					Reverdilsgade 7, 1.th.<br/>
					1701 København V
				</div>

				CVR: 35575006

				<h4>Facebook</h4><span><a href="https://www.facebook.com/VesterbroRingridning" target="_blank">https://www.facebook.com/VesterbroRingridning</a></span>

				<h4>Instagram</h4><span><a href="https://instagram.com/vesterbroringridning" target="_blank">https://instagram.com/vesterbroringridning/</a></span>
			</div>
		);
	}

});

module.exports = contact;