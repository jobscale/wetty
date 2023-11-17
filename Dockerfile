FROM node:lts-bookworm as builder
WORKDIR /home/node
COPY --chown=node:staff . .
USER node
RUN npm version
RUN rm -fr node_modules package-lock.json yarn.lock \
 && npm i --legacy-peer-deps
RUN npm run build
RUN rm -fr node_modules package-lock.json yarn.lock \
 && npm i --omit=dev --legacy-peer-deps

FROM node:lts-bullseye-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
ENV NODE_ENV=production
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && apt-get install -y tzdata lsb-release curl git vim sudo openssh-server tmux
RUN rm -fr /var/lib/apt/lists/*
RUN useradd -g users -G staff --shell $(which bash) --create-home bullseye \
 && echo bullseye:bullseye | chpasswd \
 && echo "bullseye ALL=(ALL:ALL) /usr/sbin/visudo" > /etc/sudoers.d/40-users
COPY --from=builder /home/node/build build
COPY --from=builder /home/node/node_modules node_modules
COPY docker-entrypoint.sh /usr/local/bin/
COPY --chown=node:staff package.json .
EXPOSE 3000
CMD ["npm", "start"]
