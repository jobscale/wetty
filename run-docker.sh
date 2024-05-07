{
  docker pull ghcr.io/jobscale/wetty:dind
  docker run --privileged --name wetty --restart always -p 2998:3000 \
  --ulimit nofile=128:256 --ulimit nproc=32:64 -d ghcr.io/jobscale/wetty:dind
  docker logs --since 5m -f wetty
}
