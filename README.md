[![Build Status](https://travis-ci.org/innowatio/iwwa-lambda-notifications-readed.svg?branch=master)](https://travis-ci.org/innowatio/iwwa-lambda-notifications-readed)
[![Dependency Status](https://david-dm.org/innowatio/iwwa-lambda-notifications-readed.svg)](https://david-dm.org/innowatio/iwwa-lambda-notifications-readed)
[![devDependency Status](https://david-dm.org/innowatio/iwwa-lambda-notifications-readed/dev-status.svg)](https://david-dm.org/innowatio/iwwa-lambda-notifications-readed#info=devDependencies)
[![codecov.io](https://codecov.io/github/innowatio/iwwa-lambda-notifications-readed/coverage.svg?branch=master)](https://codecov.io/github/innowatio/iwwa-lambda-notifications-readed?branch=master)

# iwwa-lambda-notifications-readed

Lambda function to set notification as readed

## Deployment

This project deployment is automated with Lambdafile. For more info [`lambda-boilerplate`](https://github.com/lk-architecture/lambda-boilerplate/).

### Configuration

The following environment variables are needed to configure the function:

- `MONGODB_URL` __string__ *required*: URL of the MongoDB endpoint
- `DEBUG` __boolean__ *optional*: set to `true` if you want more log from [`kinesis-router`](https://github.com/lk-architecture/kkinesis-router/).

### Run test

In order to run tests locally a MongoDB instance and a `MONGODB_URL` environment
param are needed.
Then, just run `npm run test` command.
