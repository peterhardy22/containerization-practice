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

docker exec -it {container id} /bin/bash
  - Opens a terminal for a specific container to naviagte inside.
  - -it stands for interactive terminal.
  - Type 'exit' to escape the interactive terminal.

docker images 
  - Shows which Docker images exist (Repository, Tag, Image ID, Created, Size).
  
docker logs {container id} or {name}
  - Shows you info that docker run without using the -d argument shows you.

docker ps -a
  - Shows you which containers are currently running (Container ID, Image, Command, Created, Status, Ports, Names).
  - Does not show you which containers have been created/started/stopped.
  - -a shows you all containers that have been stopped and are currently running.

docker pull {image}:{tag} 
  - Pulls down a specific Docker image (name) and version (tag) for usage.
  - Without specifying the tag it pulls the latest version automatically.

docker run -d -p{desired-port}:{current-port} --name {name} {image}:{tag}
  - run creates a new container everytime for the image to run in.
  - -d starts a container in the background, or detached. (Does not block the terminal)
  - -p (publish) alters the port that the container runs on.
  - --name allows you to give your container a specific name.

docker start {container id}
  - Starts a container.

docker stop {container id} 
  - Stops the container from running.