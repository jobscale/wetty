FROM ghcr.io/jobscale/wetty
RUN curl -Ls jsx.jp/s/docker | bash \
 && usermod -aG docker bookworm \
 && rm -fr /var/lib/apt/lists/*
VOLUME /var/lib/docker
