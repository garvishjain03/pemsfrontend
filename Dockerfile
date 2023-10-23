FROM node:alpine as watts
WORKDIR /app
COPY ./ ./
RUN npm ci
RUN npm run build

FROM node:alpine as watts-copy
WORKDIR /app/frontend
COPY --from=watts /app/build ./build
COPY --from=watts /app/nginx ./nginx
EXPOSE 3000

FROM nginx:1.15
COPY --from=watts-copy /app/frontend/build/ /usr/share/nginx/html
COPY --from=watts-copy /app/frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]