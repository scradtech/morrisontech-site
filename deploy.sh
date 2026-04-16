#!/bin/bash
set -e

echo "Pulling latest from git..."
git pull origin main

echo "Rebuilding and restarting container..."
docker compose down
docker compose up -d --build

echo "✅ Morrisontech site deployed successfully."
