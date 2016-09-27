var configValues = require('./config');
module.exports = {
    getMongoDBconnectionString: function(){
        return 'mongodb://'+configValues.username + ':' +configValues.password + '@ds041496.mlab.com:41496/fa_testing';
    }
}
