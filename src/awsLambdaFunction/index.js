var AWS = require('aws-sdk');
var ses = new AWS.SES({region: 'us-east-1'});
 
var RECEIVER = 'jonathonknack@gmail.com';
var SENDER = 'jonathonknack@gmail.com';

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'example.com'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
    storeToDatabase(event, (err, data) => {
        context.done(err,null)
    })
};
 
function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                event.email
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: event.message,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}

const storeToDatabase = async (event, done) => {
    var ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'})
    var documentClient = new AWS.DynamoDB.DocumentClient({regio: 'us-east-1'})
    var params = {
        TableName: 'Messages',
        Item: {
            id: String(new Date()),
            message:event.message
        }
    }
    
    try {
        const data = await documentClient.put(params).promise()
        console.log(data)
    } catch(exception) {
        console.log(exception)
    }
}