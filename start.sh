#!/bin/sh
set -e

# Start the backend
node ./backend/dist/index.js &

# Serve the frontend static files using 'serve'
serve -s ./frontend/dist -l 3000 &

# Wait for any process to exit
wait -n

# Exit with the status of the first process that exits
exit $?