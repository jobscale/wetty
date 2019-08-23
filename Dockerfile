FROM jobscale/node:bionic

COPY . .

RUN apt update && apt install -y sudo openssh-server \
&& adduser --disabled-password --gecos "" buster \
&& echo buster:buster | chpasswd

CMD ["bash", "-c", "/etc/init.d/ssh start && .nvm/versions/node/v1*/bin/node ."]
