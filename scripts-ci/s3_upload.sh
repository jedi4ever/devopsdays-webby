#!/bin/bash
set -e

S3_BUCKET="devopsdays.org"

################################################################################
# Upload S3
################################################################################
echo "Uploading new assets to s3 bucket $S3_BUCKET using account $S3_ACCESS_KEY"
echo "[default]" > ~/.s3cfg
echo "access_key=$S3_ACCESS_KEY" >> ~/.s3cfg
echo "secret_key=$S3_SECRET_KEY" >> ~/.s3cfg

s3cmd sync --acl-public --progress site/content/ s3://$S3_BUCKET --bucket-location=EU

