#!/bin/bash
docker-compose up --build -d
docker commit dockerapi_api_1 nourcn/orchestration:api
docker push nourcn/orchestration:api
docker commit dockerapi_front_1 nourcn/orchestration:front
docker push nourcn/orchestration:front
minikube start
kubectl apply -f deployment.yaml
minikube dashboard