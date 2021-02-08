// Load the AWS SDK for Node.js
import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import * as path from 'path';

AWS.config.update({region: 'REGION'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const file = ''

const fileStream = fs.createReadStream(file);

fileStream.on('error', function(err) {
  console.log('File Error', err);
});

const uploadParams = {Bucket: '', Key: path.basename(file), Body: fileStream};

export function uploadFile() {
    return s3.upload (uploadParams, function (err, data) {
        if (err) {
          console.log("Error", err);
        } if (data) {
          console.log("Upload Success", data.Location);
          return data
        }
      });
}


