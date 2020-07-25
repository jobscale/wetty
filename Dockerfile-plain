FROM node
SHELL ["bash", "-c"]
WORKDIR /root
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && apt-get upgrade -y && apt-get install -y tzdata \
 && apt-get install -y lsb-release curl git vim sudo openssh-server tmux
RUN adduser --disabled-password --gecos "" buster \
 && echo buster:buster | chpasswd \
 && echo "buster ALL=(ALL:ALL) /usr/sbin/visudo" > /etc/sudoers.d/40-users
COPY . .
RUN . ssl-keygen && npm i --production
RUN rm -fr /var/lib/apt/lists/*
EXPOSE 3000
CMD ["bash", "-c", "/etc/init.d/ssh start && npm start -- --sslkey tls/wildcard.jsx.jp.key --sslcert tls/wildcard.jsx.jp.cert"]
