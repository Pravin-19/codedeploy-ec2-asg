#!/bin/bash

# Navigate to the application directory
cd /home/ubuntu/codedeploy-ec2-asg

# Find PIDs of running Node.js processes
PIDS=$(ps aux | grep node | grep -v grep | awk '{print $2}')

# Check if any PIDs were found
if [ -z "$PIDS" ]; then
  echo "No Node.js application is currently running."
else
  # Iterate over each PID and kill it
  for PID in $PIDS
  do
    echo "Stopping the running Node.js application (PID: $PID)..."
    kill -9 $PID
    echo "Application with PID $PID stopped."
  done
fi

# Start the Node.js application
nohup npm start > /dev/null 2>&1 &
