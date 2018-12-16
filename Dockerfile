FROM node:latest
MAINTAINER nyallampally@vmtechllc.com
RUN apt-get update
RUN apt-get install -y nginx
COPY dist/index.html /var/www/html/index.html
COPY dist/main.js /var/www/html/main.js
ENTRYPOINT [ "/usr/sbin/nginx","-g","daemon off;" ]