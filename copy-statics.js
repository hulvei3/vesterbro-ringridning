var ncp = require('ncp').ncp;

var cb = function(type, err) {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(type, 'copied!')
}

// ncp('media/', 'build/media', cb.bind(null, 'media files'));
// ncp('img/', 'build/img', cb.bind(null, 'image files'));

// ncp('css/', 'build/', cb.bind(null, 'css files'));
ncp('node_modules/react-image-gallery/build/image-gallery.css', 'css/image-gallery.css', cb.bind(null, 'react-image-gallery file'));

// ncp('index.html', 'build/index.html', cb.bind(null, 'index file'));