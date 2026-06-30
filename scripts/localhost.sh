#!/bin/bash

# Helper functions
print_start_marker() {
    echo "=============================== $1 ================================"
}
print_end_marker() {
    echo "===================================================================="
}
print_red() {
    echo -e "\033[0;31m$1\033[0m"
}
print_help() {
    print_start_marker "Help"
    echo "Usage: scripts/localhost.sh [argument]"
    echo "Arguments:"
    echo "  git     - git pull and merge main into your branch"
    echo "  start   - Start the frontend"
    echo "  deploy  - deploy"
    echo "  --help  - Display this help message."
    print_end_marker
}

# Handle 1st argument
if [ "$1" == "git" ]; then
    print_start_marker "git fetch/pull/status"
    git fetch --all -p; git pull; git status;
    print_end_marker
    print_start_marker "Merging main into your branch"
    git merge origin/main 
    print_end_marker
elif [ "$1" == "start" ]; then
    print_start_marker "Starting frontend..."
    npm run docs:dev
    print_end_marker
elif [ "$1" == "deploy" ]; then
    print_start_marker "Deploying..."
    npm run deploy
    print_end_marker
else
    print_help
    exit 0
fi
