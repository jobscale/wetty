FROM node:lts-bullseye as builder
WORKDIR /home/node
COPY . .
RUN chown -R node. .
USER node
RUN npm version
RUN npm ci --legacy-peer-deps && npm run build
RUN rm -fr node_modules && npm i --production

FROM node:lts-bullseye-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
ENV NODE_ENV=production
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && apt-get install -y tzdata lsb-release curl git vim sudo openssh-server tmux
RUN rm -fr /var/lib/apt/lists/*
RUN adduser --disabled-password --gecos "" bullseye \
 && echo bullseye:bullseye | chpasswd \
 && echo "bullseye ALL=(ALL:ALL) /usr/sbin/visudo" > /etc/sudoers.d/40-users
COPY --from=builder /home/node/build build
COPY --from=builder /home/node/node_modules node_modules
COPY package.json .
EXPOSE 3000
CMD ["bash", "-c", "/etc/init.d/ssh start && npm start"]
