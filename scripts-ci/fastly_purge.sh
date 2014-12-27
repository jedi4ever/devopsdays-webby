#!/bin/bash
FASTLY_API_KEY=$FASTLY_API_KEY
FASTLY_SERVICE_ID=$FASTLY_SERVICE_ID
echo "clearing fastly cache"
curl -H "Fastly-Key: $FASTLY_API_KEY" -X POST https://api.fastly.com/service/$FASTLY_SERVICE_ID/purge_all
