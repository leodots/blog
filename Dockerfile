# Etapa 1: build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# Instala dependências com cache
RUN corepack enable && yarn install --frozen-lockfile

# Gera build de produção
RUN yarn build

# Etapa 2: imagem final apenas com build
FROM node:20-alpine AS runner

WORKDIR /app

# Copia apenas o necessário
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

# Instala apenas as prod deps
RUN corepack enable && yarn install --production --frozen-lockfile

EXPOSE 3000

# Inicia o Next.js
CMD ["yarn", "start"]