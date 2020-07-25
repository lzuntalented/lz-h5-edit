#! /bin/bash
mysql <<EOF
source /home/server/sql/heart-show.sql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
flush privileges;
EOF