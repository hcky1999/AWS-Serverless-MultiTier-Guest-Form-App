# Teardown Guide

**IMPORTANT: To avoid ongoing charges, follow these steps after you're done:**

1. Go to CloudFormation in AWS Console
2. Find your stack (`guest-app-stack` or whatever name you used)
3. Delete the stack 
4. Confirm all resources are gone (S3, DynamoDB, Lambda, API Gateway)
5. Manually check for any remaining S3 buckets/files

Other options: using the CLI:
1.) use this code => aws cloudformation delete-stack --stack-name guest-app-stack or <stackname>
2.) Double-check DynamoDB tables and S3 buckets are gone.



