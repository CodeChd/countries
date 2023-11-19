FROM node:20.6.1-slim as build_stage
WORKDIR /app
COPY  package*.json .
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm" , "run", "dev"]
