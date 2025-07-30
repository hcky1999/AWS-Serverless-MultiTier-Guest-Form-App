# Deployment Guide

## 1. Deploy CloudFormation Stack

- Edit `infra/cloudformation.yaml` if needed (e.g., S3 bucket name, region)
- In AWS Console > CloudFormation, create a new stack, upload the YAML file

## 2. Deploy Backend Lambda

- Zip `backend/index.js` as `backend-lambda.zip`
- Upload to an S3 bucket (must exist in your account)
- Update the Lambda function code in AWS Console or using AWS CLI

## 3. Deploy Frontend

- In `frontend/`, run `npm install` and `npm run build`
- Upload the `build/` folder to the S3 bucket created by the stack
- (Optional) Configure bucket for static website hosting

## 4. Update API Endpoint

- Get the API Gateway endpoint from CloudFormation Outputs or AWS Console
- Update the fetch URL in `frontend/src/App.js`

## 5. Test

- Visit your S3 static site URL and submit the form

## 6. Teardown

- See `docs/cleanup.md`
