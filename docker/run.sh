#! /bin/bash

service mysql start
cd /home/server && pm2 start pm2.json
nginx -g "daemon off;"