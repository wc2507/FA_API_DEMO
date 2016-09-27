var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deviceSchema = new Schema({
    deviceID: String,
    date: {type:Date, default:Date.now },
    measurements:{
        temperature: Number,
        humidity:Number,
        voc:Number,
        dust:Number
    }
});

var devices = mongoose.model('devices',deviceSchema);
module.exports = devices;
