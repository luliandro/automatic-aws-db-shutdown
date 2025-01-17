## General

This repository was created together with [this blog post](https://medium.com/hatchsoftware/saving-money-by-automatically-shutting-down-rds-instances-using-aws-lambda-and-aws-sam-925fd86592b5).



#### Prerequisites
- Install Node.js (https://nodejs.org/en/download/)
- Install AWS CLI (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- Install AWS SAM (https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- Install Docker (https://docs.docker.com)

## Development / testing
##### Invoke lambda on local machine (needs Docker to be installed)

```bash
sam local invoke <Function to invoke>
```

## Deployment
#### From local machine

Package

```bash
sam package --template-file template.yaml --s3-bucket brooklyn-archive-dev --output-template-file outputTemplate.yaml --profile dev
```

Deploy

```bash
sam deploy --template-file outputTemplate.yaml --stack-name dev-auto-db-shutdown-stack  --capabilities CAPABILITY_IAM --parameter-overrides ParameterKey=ClusterID,ParameterValue=dev-rds-cluster --profile dev
``` 

Delete stack

```bash
sam delete --stack-name dev-auto-db-shutdown-stack
``` 
#### Automated

Automated deployment with CodePipeline (setup explained in [this blog post](https://medium.com/hatchsoftware/setting-up-ci-cd-for-lambda-functions-using-aws-codepipeline-880567769dde)).

`Commit and push using GIT`
