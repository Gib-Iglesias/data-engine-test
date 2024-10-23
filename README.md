# README File

## **Flight Search Engine API**

## How to run the app with docker

> For running the app using docker you might have installed docker on your system. If you have not it <a href="https://docs.docker.com/engine/install/">Click Here</a>. After it, you should run this commands to start the container:

```bash

#Create the image with node
docker build . -t data-engine-test-node

#Starts the container with the API image
docker run -p 3001:3001 -d data-engine-test-node

#After that the app runs on the port 3001. To check it:
docker ps #Copy the container id

docker logs <container-id>

```

## How to run normally the server

dev: npm run dev
prod: npm run start

URL Swagger para hacer checks:
"http://localhost:3001/api-docs/#/"

That's All Forks... So Far
