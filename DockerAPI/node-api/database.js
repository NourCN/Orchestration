const mongoose = require("mongoose");
mongoose.connect(
	"mongodb://mongo:27017/node-api",
	{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4
	},
	(error) => {
		if (!error) console.log("MongoDb connet");
		else console.log("connection error:" + error);
	}
); 
