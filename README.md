# AWS Serverless Multi-Tier Guest Form App

A real-world AWS portfolio project showcasing scalable, serverless architecture:

- **Frontend:** React + Bootstrap (S3 static hosting)
- **API:** Lambda + API Gateway (serverless)
- **Database:** DynamoDB
- **File Storage:** S3
- **Infrastructure as Code:** CloudFormation

## Architecture

![Diagram](architecture/diagram-placeholder.png)

## Benefits

- Clean separation of layers: easier to manage, secure, and scale
- No servers to manage or patch
- Minimal costs, fits in AWS Free Tier
- Modern cloud-native and serverless best practices

## Quickstart

1. **Deploy infrastructure**: `infra/cloudformation.yaml`
2. **Deploy backend Lambda**: Upload zipped code to S3 bucket, update Lambda via console or CLI
3. **Deploy frontend**: `frontend/` to S3
4. **Test the app!**
5. **Teardown:** Delete CloudFormation stack (see `docs/cleanup.md`)

---

- See `/docs/benefits.md` for detailed benefits
- See `/docs/costs.md` for estimated costs
- See `/docs/deployment.md` for full deployment guide
