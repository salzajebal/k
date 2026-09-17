FROM node:24-bookworm-slim AS build
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN PORT=5000 BASE_PATH=/ pnpm --filter @workspace/api-server run build
RUN PORT=4173 BASE_PATH=/ pnpm --filter @workspace/zrg-law-clone run build

FROM node:24-bookworm-slim AS api
WORKDIR /app
COPY --from=build /app/artifacts/api-server/dist ./dist
ENV NODE_ENV=production PORT=5000
EXPOSE 5000
CMD ["node", "--enable-source-maps", "dist/index.mjs"]

FROM caddy:2-alpine AS web
COPY --from=build /app/artifacts/zrg-law-clone/dist/public /srv
COPY deploy/Caddyfile /etc/caddy/Caddyfile
