var AWS = require('aws-sdk');
var request = require('request');
AWS.config.update({region:'us-east-1'});
var IFTTTkey = "bxkuw1UoUnfarywVgtvEBc";


//this is called when the AWS Button is pressed and event data is passed as well
exports.handler = function(event, context) {
    console.log("Received AWS Button event: " + event.clickType + ". Firing IFTTT Maker Trigger...");
    request('https://maker.ifttt.com/trigger/' + 'AWS-'+ event.clickType + '/with/key/' + IFTTTkey, function (error, response, body) {
        console.log("Complete! Response: ", response.statusCode);
    }
)};
