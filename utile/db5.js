var AWS = require("aws-sdk");
let awsConfig = {
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

export const updateTasks = function () {
  console.log("update tasks");
  var params = {
    TableName: "users",
    Key: { id: "test-id-no=five" },
    // UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
    UpdateExpression: "set tasks = :tasks",
    // UpdateExpression: "set age = :age",
    // UpdateExpression: "REMOVE updated_by",
    ExpressionAttributeValues: {
      ":tasks": [
        { description: "this is task one", title: "This is task one title" },
        {
          description: "this is task two description",
          title: "This is task two title",
        },
      ],
      // ":cols": "come cols here",
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
