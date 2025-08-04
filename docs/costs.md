# 💰 Cost Estimate: AWS Serverless Guest Form App (with Security Enhancements)

This document outlines the estimated cost impact of the added security features for the Guest Form application. All values assume **light usage typical of a personal project or portfolio demo**.

---

## ✅ Summary: Security Features

| Feature                              | AWS Service     | Purpose                             |
|--------------------------------------|------------------|-------------------------------------|
| CORS-enabled API Gateway             | API Gateway      | Allows frontend (browser) access     |
| IAM Least-Privilege Policy           | IAM              | Secures Lambda permissions           |
| CloudFront HTTPS Security            | CloudFront       | SSL/TLS encryption and global CDN    |

---

## 💸 Estimated Monthly Cost

| AWS Service     | Free Tier Allowance                          | Usage Example        | Estimated Monthly Cost |
|------------------|-----------------------------------------------|-----------------------|--------------------------|
| **Lambda**       | 1M requests, 400K GB-sec/month                | ~50K requests         | **$0**                   |
| **API Gateway**  | 1M HTTP API calls                             | ~50K calls            | **$0**                   |
| **CloudFront**   | 1TB data transfer out                         | ~10GB transfer        | **$0**                   |
| **IAM**          | Free                                          | 1 new role/policy     | **$0**                   |
| **CORS Settings**| Free configuration                           | N/A                   | **$0**                   |

---

## 📦 Full Project (Including Base Setup)

| Service        | Estimated Cost (Monthly) |
|----------------|--------------------------|
| S3 Hosting     | $0 (static site, <5GB)   |
| API Gateway    | $0 (low traffic)         |
| Lambda         | $0                       |
| DynamoDB       | $0 (25GB & 200M RCU/WCU free) |
| CloudFront CDN   | $0 (within free tier)    |
| **Total**      | ✅ **$0.00/month** |

---

## 🔐 Notes

- This estimate assumes **you are within the AWS Free Tier limits**.
- If you exceed those limits or your Free Tier has expired, costs will rise slightly (usually still under $2/month for moderate use).
- Always monitor usage with [AWS Budgets](https://console.aws.amazon.com/billing/home#/budgets) to avoid surprises.

