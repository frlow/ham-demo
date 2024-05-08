FROM oven/bun:alpine as build
COPY app-astro /app
COPY common /common
WORKDIR /app
RUN bun i
RUN bun run build

FROM oven/bun:alpine
COPY --from=build /app/dist /app
WORKDIR /app
CMD bun run server/entry.mjs
EXPOSE 4321
