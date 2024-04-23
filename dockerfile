FROM node:alpine AS builder 
WORKDIR /app
COPY coco-app/package*.json ./
RUN npm install
COPY coco-app .
RUN npm run build 

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]