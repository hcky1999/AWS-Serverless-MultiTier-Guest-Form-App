# Guest App Deployment Guide

## 1. Zip Lambda code
```bash
cd backend
zip backend-lambda.zip index.js
```

## 2. Upload zip to S3 bucket
```bash
aws s3 cp backend-lambda.zip s3://guestbucket-lc/
```

## 3. Deploy using CloudFormation
```bash
cd ../infra
aws cloudformation deploy \
  --template-file cloudformation.yaml \
  --stack-name guest-app-stack \
  --capabilities CAPABILITY_NAMED_IAM
```

## 4. Build and upload frontend
```bash
cd ../frontend
npm run build
aws s3 sync build/ s3://guest-app-frontend-672566183195-us-east-1 --delete
```

## 5. Get CloudFront URL
```bash
aws cloudformation describe-stacks --stack-name guest-app-stack \
  --query 'Stacks[0].Outputs[?OutputKey==`SecureWebsiteURL`].OutputValue' --output text
```

## 6. Test secure HTTPS site
Open the CloudFront URL in browser: `https://d2y89h5kncs5ch.cloudfront.net`

## 7. Test API
```bash
curl -X POST https://r9g6zkslgc.execute-api.us-east-1.amazonaws.com/prod/guests \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com"}'
```
