FROM ghcr.io/jobscale/wetty
RUN curl -Ls git.io/susi | bash && usermod -aG docker bullseye
RUN rm -fr /var/lib/apt/lists/*
VOLUME /var/lib/docker
