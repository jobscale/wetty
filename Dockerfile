FROM jobscale/node

RUN apt-get update && apt-get install -y sudo openssh-server

RUN adduser --disabled-password --gecos "" buster \
&& echo buster:buster | chpasswd \
&& echo "buster ALL=(ALL:ALL) /usr/sbin/visudo" > /etc/sudoers.d/40-users

COPY . .

RUN . ssl-keygen

CMD ["bash", "-c", "/etc/init.d/ssh start && . .nvm/nvm.sh && npm run tls"]
