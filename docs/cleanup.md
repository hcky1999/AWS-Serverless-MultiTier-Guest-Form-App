# Teardown Guide

**IMPORTANT: To avoid ongoing charges, follow these steps after you're done:**

1. Go to CloudFormation in AWS Console
2. Find your stack (`guest-app-stack` or whatever name you used)
3. Delete the stack
4. Confirm all resources are gone (S3, DynamoDB, Lambda, API Gateway)
5. Manually check for any remaining S3 buckets/files


