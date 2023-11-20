FROM node:20.6.1-slim as build_stage
WORKDIR /app
COPY  package*.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:mainline-alpine3.18-slim
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build_stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
