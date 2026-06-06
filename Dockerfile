# ── Astro static build (Astro 6 Node >=22.12 ister) ──
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── nginx serve ──
# Coolify/Traefik "/campaignscard" path prefix'ini strip eder → container kök (/) alır.
# Bu yüzden dist doğrudan nginx kök dizinine kopyalanır (alt klasör YOK).
# Astro base path "/campaignscard" ise sadece tarayıcı tarafı URL/linklerde kalır.
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
