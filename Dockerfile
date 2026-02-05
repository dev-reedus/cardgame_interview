FROM node:22.17.0-alpine AS builder

ARG VITE_MOCK_ENABLED=false
ENV VITE_MOCK_ENABLED=$VITE_MOCK_ENABLED

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
