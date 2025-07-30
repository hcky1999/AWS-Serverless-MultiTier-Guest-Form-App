# Cost Estimate

- All resources fit in AWS Free Tier for 12 months
- S3, DynamoDB, Lambda, API Gateway: Free unless high usage
- Only cost: Custom domain ($0.50/month) if used

# How to Check Your Usage
- Go to AWS Billing Dashboard
- Check "Cost Explorer" after your tests

# Potential Hidden Costs
- Leftover S3 files after teardown
- DynamoDB tables in provisioned mode (our template uses on-demand)
