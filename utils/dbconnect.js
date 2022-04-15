const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/Todo', {
		useNewUrlParser: true, // <-- no longer necessary
		useUnifiedTopology: true, // <-- no longer necessary
	})
	.then(() => console.log('db connect'))
	.catch(err => console.log(err));
