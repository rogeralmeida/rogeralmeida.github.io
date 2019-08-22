## A way to install many apt-get dependencies reading from a file without loop:
```
  DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
  $(cat /tmp/Aptfile | xargs) 
```
source: https://evilmartians.com/chronicles/ruby-on-whales-docker-for-ruby-rails-development
 
