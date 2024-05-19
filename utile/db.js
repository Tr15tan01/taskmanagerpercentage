// const AWS = require("aws-sdk");
// const AWS = require("@aws-sdk/client-dynamodb");
const { DynamoDB } = require("aws-sdk");
import AWS from "aws-sdk";
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

AWS.config.update({
  //credentials here
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "cars";

export const getCars = async () => {
  const params = {
    TableName: TABLE_NAME,
  };

  const cars = await dynamoClient.scan(params).promise();
  console.log(cars, "fron function console");
  return cars;
};

export const getTasks = async () => {
  const params = {
    TableName: "tasks",
  };

  const tasks = await dynamoClient.scan(params).promise();
  console.log(tasks, "fron function console");
  return tasks;
};
// getCars();
// module.exports = getCars;

const writeItem = () => {
  var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

  var params = {
    TableName: "cars",
    Item: {
      id: { N: "001" },
      CUSTOMER_NAME: { S: "Richard Roe" },
    },
  };

  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};
