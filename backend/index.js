let express = require('express')// Initialize the app
var bodyParser = require('body-parser');
global.bodyParser = require('body-parser');
var myRoutes=require('./api-routes.js')
var cors = require('cors')
//Used for CORS policy
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST','DELETE','PATCH'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};
let app = express();// Setup server port
app.use(cors(corsOpts))
//Used for posting data
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))
app.use('/', myRoutes);

var port = process.env.PORT || 8080;// Send message for default URL

app.get('/', (req, res) => res.send('Hello World with Express'));// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
