// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
import { DynamoDBClient } from "@aws-sdk/client-dynamqodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";
// Set the region
AWS.config.update({
  region: process.env.NEXT_PUBLIC_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  },
});

// // Create DynamoDB document client
// const dynamoClient = new AWS.DynamoDB.DocumentClient();
// var docClient = new AWS.DynamoDB.DocumentClient({
//   apiVersion: "2012-08-10",
//   region: process.env.NEXT_PUBLIC_REGION,
// });
const client = new DynamoDBClient({
  apiVersion: "2012-08-10",
  region: process.env.NEXT_PUBLIC_REGION,
});
const docClient = DynamoDBDocumentClient.from(client);

console.log("hi", process.env.NEXT_PUBLIC_REGION);

// Create DynamoDB document client
// var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

// const client = new DynamoDBClient({});
// const docClient = DynamoDBDocumentClient.from(client);

export const updateUser = async () => {
  console.log("user update start");
  const command = new UpdateCommand({
    TableName: "users",
    Key: {
      id: "test-id-no=one",
    },
    UpdateExpression: "set Color = :color",
    ExpressionAttributeValues: {
      ":color": "black",
    },
    ReturnValues: "ALL_NEW",
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};
