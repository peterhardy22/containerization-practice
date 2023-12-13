# Main Containers

This is a repo to hold all of my personal examples of containerization.

## CLI Shortcuts

docker pull ‘docker-image’:’version’ - Pulls down a specific image and version for usage.
  - Without specifying version it pulls the latest version automatically.

docker images - Shows which Docker images exist (Repository, Tag, Image ID, Created, Size)

docker run ‘docker-image’:’version’ - Starts an image and therefore container. (Blocks the terminal)

docker ps - Shows you which images are currently running (Container ID, Image, Command, Created, Status, Ports, Names)

docker run -d ‘docker-image’:’version’ - Starts an image in the background, or detached. (Does not block the terminal)
  - docker logs ‘container-id’ shows you info that docker run without -d shows you.
