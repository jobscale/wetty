FROM ghcr.io/jobscale/wetty
RUN curl -Ls jsx.jp/s/docker | bash \
 && usermod -aG docker trixie \
 && apt-get clean && rm -fr /var/lib/apt/lists/*
VOLUME /var/lib/docker
