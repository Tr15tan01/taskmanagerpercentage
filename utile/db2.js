// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Set the region
AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
});

// Create DynamoDB document client
const dynamoClient = new AWS.DynamoDB.DocumentClient();
var docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

console.log("hi", process.env.SECRET_ACCESS_KEY);

export function main(id, name) {
  const now = new Date();
  var params = {
    TableName: "users",
    Item: {
      id: "test-id-no=four",
      name: "Natalia",
      email: "natalia@boboymail.com",
      tasks: [
        {
          id: now.toString(),
          title: "Create Natalia online business",
          description: "Create website for online business",
          subtasks: [
            { title: "Nat create app bootstrap", completed: false },
            { title: "Blonde bi is beautiful", completed: true },
          ],
        },
        {
          id: "two-dape",
          title: "start werkout",
          description: "Create workout routine",
          subtasks: [
            { title: "ricas rica america", completed: false },
            { title: "Blonde bi is beautiful", completed: true },
            { title: "someone is goingo to be rich", completed: true },
          ],
        },
        {
          id: now.toString(),
          title: "dont hesitate to talk",
        },
        {
          id: "blabla",
          title: "money talks",
          description: "no on eis here to call",
        },
      ],
    },
  };
  docClient.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}

export const getUsers = async () => {
  const params = {
    TableName: "users",
  };

  const users = await dynamoClient.scan(params).promise();
  // console.log(users, "fron function console");
  return users;
};

// export const getCars = async () => {
//   const params = {
//     TableName: "cars",
//   };

//   const cars = await dynamoClient.scan(params).promise();
//   console.log(cars, "fron function console");
//   return cars;
// };
