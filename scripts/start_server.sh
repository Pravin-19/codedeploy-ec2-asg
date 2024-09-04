#!/bin/bash

# Navigate to the application directory
cd /home/ubuntu/nodejs-app

# Start the Node.js application
nohup npm start > /dev/null 2>&1 &
