var React = require('react');
var ImageGallery = require('react-image-gallery');

var imgs = [
	'media/2013/1.jpg',
	'media/2013/2.jpg',
	'media/2013/3.jpg',
	'media/2013/4.jpg',
	'media/2013/5.jpg',
	'media/2013/6.jpg',
	'media/2013/7.jpg',
	'media/2014/1.jpg',
	'media/2014/2.jpg',
	'media/2014/3.jpg'
];



var images = imgs.map(img => {
	return {
		original: img,
		thumbnail: img
	} 
});

var pictures = React.createClass({ displayName: 'Page.pictures',

	componentDidMount: function () {
		
	},

	render: function() {
		return (
			<div className="img-gallery">
				<ImageGallery
					items={images}
					autoPlay={false}
					slideInterval={3000}
				/>
			</div>
		);
	}

});

module.exports = pictures;
