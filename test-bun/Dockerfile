FROM oven/bun:1 AS backend
WORKDIR /usr/src/app
COPY . .
RUN bun install
RUN bun run build
USER bun
CMD [ "bun", "run", "dist/index.js" ]