var AWS = require("aws-sdk");
let awsConfig = {
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

export let updateUser = function () {
  var params = {
    TableName: "users",
    Key: { id: "test-id-no=two" },
    // UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
    UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
    // UpdateExpression: "set age = :age",
    // UpdateExpression: "REMOVE updated_by",
    ExpressionAttributeValues: {
      ":byUser": "cringer",
      ":boolValue": true,
    },
    ReturnValues: "UPDATED_NEW",
  };
  docClient.update(params, function (err, data) {
    if (err) {
      console.log("users::update::error - " + JSON.stringify(err, null, 2));
    } else {
      console.log("users::update::success " + JSON.stringify(data));
    }
  });
};
