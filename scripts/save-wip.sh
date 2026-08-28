#!/bin/bash

# A simple script to save Work In Progress (WIP) quickly.
# Usage: ./scripts/save-wip.sh ["optional message"]

MSG=${1:-"WIP: local backup before AI modification"}

echo "Saving Work In Progress..."
git add .
git commit -m "$MSG"
echo "✅ WIP saved locally as: '$MSG'"
echo "To undo this WIP commit later and keep your changes, run: git reset HEAD~1"
