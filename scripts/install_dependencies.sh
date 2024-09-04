#!/bin/bash

# Ensure Apache is installed and running
sudo apt-get update
sudo apt-get install -y apache2

# Start Apache if not already running
sudo systemctl start apache2
