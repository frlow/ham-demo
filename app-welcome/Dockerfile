FROM oven/bun:alpine as build
COPY . /app/
WORKDIR /app
RUN bun i
RUN bun run build

FROM oven/bun:alpine
COPY --from=build /app/dist /app
WORKDIR /app
CMD bun run index.js
EXPOSE 3444
