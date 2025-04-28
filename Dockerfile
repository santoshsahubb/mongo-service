FROM node:22.12.0-alpine

WORKDIR /usr/src/app


# Copy package files and install dependencies
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the project
RUN pnpm run build

RUN rm -rf src/
RUN rm -rf tsconfig.json

EXPOSE 3000
CMD ["pnpm", "docker:start"]
