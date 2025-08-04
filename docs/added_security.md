Comments explaining key changes needed to apply this infrastructure:

# 1. S3 Configuration:
# - Ensure your S3 bucket 'guestbucket-lc' exists and contains:
#   - backend-lambda.zip with index.handler

# 2. Lambda Function Code:
# - Create index.handler in backend-lambda.zip:
#   - Must handle DynamoDB operations using TABLE_NAME env var

# 3. Frontend Code:
# - Deploy frontend files to S3 bucket created by stack:
#   - index.html as main entry point
# - Update API endpoints in frontend code to use:
#   - /guests endpoint for guest operations
# - Enable CORS handling in frontend code

# 4. Deployment Steps:
# - Package and upload Lambda code to guestbucket-lc
# - Deploy CloudFormation template
# - Upload frontend code to created S3 bucket
# - Test API endpoints using outputsDescription: Serverless Multi-Tier Guest App - Infra