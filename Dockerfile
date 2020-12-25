FROM nginx:1.15
RUN mkdir /html
COPY docs/.vuepress/dist/  /html
COPY nginx.conf /etc/nginx/nginx.conf
