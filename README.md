# Main Container Exploration

Going through and storing commands for using with Docker.

## Documentation
  1. [Docker](https://docs.docker.com/get-started/)
  2. [Docker Hub Container Image Library](https://hub.docker.com/)

## CLI Shortcuts

docker build -t {path}
  - Builds a Docker image from a Dockerfile.
  - -t (--tag) sets a name and optionally a tag in the "name:tag" format.
  - Using '.' for path means current directory.

docker images 
  - Shows which Docker images exist (Repository, Tag, Image ID, Created, Size).
  
docker logs {container} 
  - Shows you info that docker run without using the -d argument shows you.

docker pull {name}:{tag} 
  - Pulls down a specific Docker image (name) and version (tag) for usage.
  - Without specifying the tag it pulls the latest version automatically.

docker ps 
  - Shows you which containers are currently running (Container ID, Image, Command, Created, Status, Ports, Names).
  - Does not show you which containers have been created/started/stopped.

docker ps -a
  - Shows you all containers that have been stopped and are currently running.

docker run --name web-app -d -p {desired-port}:{current-port} {name}:{tag}
  - run creates a new container everytime.
  - --name allows you to give your container a name.
  - -d starts a container in the background, or detached. (Does not block the terminal)
  - -p (publish) alters the port that the container runs on.

docker start {container}
  - Starts a container.

docker stop {container} 
  - Stops the container from running.