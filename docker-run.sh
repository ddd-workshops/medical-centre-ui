#!/bin/bash

http-server dist --port 3000 &
http-server dist-storybook --port 3001 &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
