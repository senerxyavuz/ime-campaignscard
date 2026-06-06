# ── Astro static build ──
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── nginx serve ──
# Astro base path "/campaignscard" ile derlendiği için dosyalar
# nginx kök altında /campaignscard/ klasörüne kopyalanır → URL ile birebir eşleşir.
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html/campaignscard
EXPOSE 80
