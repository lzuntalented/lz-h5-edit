#! /bin/bash
export DEBIAN_FRONTEND=noninteractive

ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
apt-get install -y tzdata
dpkg-reconfigure --frontend noninteractive tzdata