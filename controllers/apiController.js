var devices = require('../models/deviceModel');
var bodyParser = require('body-parser');
module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.get('/api/deviceData/:deviceID',function(req,res){
        devices.find({deviceID:req.params.deviceID},function(err,results){
                if (err) throw err;
                var measurement = [];
                results.forEach(function(data){
                    measurement.push({
                        deviceID: data.deviceID,
                        temperature: data.measurements.temperature,
                        humidity: data.measurements.humidity,
                        voc: data.measurements.voc,
                        dust: data.measurements.dust,
                        date: data.date
                    });     
                });
                res.send(measurement);
        });
    });

   app.post('/api/deviceData',function(req,res){
       var newPost = devices({
           deviceID: req.body.deviceID,
           measurements:{
           temperature: req.body.temperature,
           humidity: req.body.humidity,
           voc: req.body.voc,
           dust: req.body.dust
           }
       });
     newPost.save(function(err){
         if (err) throw err;
         res.send('Success');
     })
       
    });


}