# ── Astro static build (Astro 6 Node >=22.12 ister) ──
FROM node:22-alpine AS build
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
