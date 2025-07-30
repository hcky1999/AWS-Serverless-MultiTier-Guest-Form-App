
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

const TABLE_NAME = process.env.TABLE_NAME;
const BUCKET_NAME = process.env.BUCKET_NAME;

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    console.log("Parsed body:", body);
    console.log("Using table:", TABLE_NAME);

    const item = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      city: body.city || "",
      state: body.state || "",
      country: body.country || "",
      message: body.message,
      timestamp: new Date().toISOString()
    };

    await db.put({ TableName: TABLE_NAME, Item: item }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Guest registered!', item }),
      headers: { "Access-Control-Allow-Origin": "*" }
    };
  } catch (error) {
    console.log("Error occurred:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: { "Access-Control-Allow-Origin": "*" }
    };
  }
};
