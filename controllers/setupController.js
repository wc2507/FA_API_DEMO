var devices = require('../models/deviceModel');
module.exports = function(app){
    app.get('/api/seedDataBase',function(req,res){
    // seed database
        var startSeeds = [
            {
             deviceID: '0xf8f005f418d7',
             measurements:{
             temperature: 20000,
             humidity:20300,
             voc:234,
             dust:300
               }
            }
            , {
             deviceID: '0xf8f005f418d7',
             measurements:{
             temperature: 20300,
             humidity:20400,
             voc:244,
             dust:300
               }
            },
            {
             deviceID: '0xf8f005f418d7',
             measurements:{
             temperature: 23400,
             humidity:20300,
             voc:254,
             dust:350
               }
            }
        ];
        devices.create(startSeeds,function(err,results){
            if (err) throw err;
            res.send(results);
        });
    });
}