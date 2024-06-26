import AWS from "aws-sdk";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const dynamoClient = new AWS.DynamoDB.DocumentClient();

AWS.config.update({
  //credentials here
});

export const main = async () => {
  const command = new PutCommand({
    TableName: "cars",
    Item: {
      CommonName: "Shiba Inu",
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};
