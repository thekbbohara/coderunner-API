FROM node as builder
WORKDIR /build

COPY package*.json .
RUN npm i

COPY src/ src/
COPY tsconfig.json tsconfig.json

RUN npm run build

#stage 2
FROM node as runner

WORKDIR /app

COPY --from=builder build/package*.json .
COPY --from=builder build/node_modules node_modules/
COPY --from=builder build/dist dist/

CMD ["npm","start"]
