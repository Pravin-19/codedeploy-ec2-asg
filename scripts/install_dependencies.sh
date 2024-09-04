#!/bin/bash

# Update package lists
apt-get update -y

# Install Node.js and npm
apt-get install -y nodejs npm

# Navigate to the application directory
cd /home/ubuntu/codedeploy-ec2-asg

# Install the application's dependencies
npm install
