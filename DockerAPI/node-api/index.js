const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./database");
const postsRoutes =require('./controller/postsController');
const cors = require('cors');



app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/',postsRoutes);


app.listen(4242, () => console.log("server running on port :4242"));


