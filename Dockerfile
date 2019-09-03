FROM jobscale/node:bionic

COPY . .

RUN apt update && apt install -y sudo openssh-server \
&& adduser --disabled-password --gecos "" buster \
&& echo buster:buster | chpasswd \
&& echo "buster ALL=(ALL:ALL) /usr/sbin/visudo" > /etc/sudoers.d/40-users

RUN . ssl-keygen

CMD ["bash", "-c", "/etc/init.d/ssh start && . .nvm/nvm.sh && npm run tls"]
