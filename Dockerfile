FROM node:lts-buster
SHELL ["bash", "-c"]
WORKDIR /root
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive apt-get upgrade -y \
 && DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata \
 && apt-get install -y lsb-release curl git vim sudo openssh-server tmux
RUN adduser --disabled-password --gecos "" buster \
 && echo buster:buster | chpasswd \
 && echo "buster ALL=(ALL:ALL) /usr/sbin/visudo" > /etc/sudoers.d/40-users
COPY . .
RUN . ssl-keygen
EXPOSE 3000
CMD ["bash", "-c", "/etc/init.d/ssh start && npm run tls"]
