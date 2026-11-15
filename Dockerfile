# syntax=docker/dockerfile:1
FROM node:22-alpine AS build
WORKDIR /site
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Local preview: canonical links and the sitemap point at the Docker address.
ARG VITE_SITE_URL=http://localhost:5190/
ENV VITE_SITE_URL=$VITE_SITE_URL
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /site/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
