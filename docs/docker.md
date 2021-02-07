## Docker Commands
$ docker build --rm -t backend:custom backend
$ docker build --rm -t frontend:custom frontend

$ docker run -it --rm backend:custom ls -al
$ docker run -it --rm frontend:custom ls -al

$ docker run --rm -p 3000:3000 frontend:custom 

$ docker images
$ docker image prune -a

$ docker rmi backend:custom
$ docker rmi nginx:custom

$ docker ps -a
$ docker rm -f backend

$ docker cp ./backend/mediafiles backend:/app/
$ docker rm backend:/app/mediafiles/

$ docker volume ls
$ docker volume prune

$ docker network ls
$ docker network prune

$ docker system prune -a

$ docker volume inspect postgres
$ docker volume inspect staticfiles
$ docker volume inspect mediafiles

## Docker-Compose Commands
$ docker-compose pull

$ docker-compose down -v
$ docker-compose down --rmi all
$ docker-compose down --rmi local   

$ docker-compose build

$ docker-compose up -d
$ docker-compose up -d --build
$ docker-compose up -d --build backend
$ docker-compose up -d --build backend

$ docker-compose logs -f
$ docker-compose exec backend ls -a

$ docker-compose exec web /bin/bash
$ docker-compose exec web python manage.py createsuperuser
$ docker-compose exec web python manage.py migrate
$ docker-compose exec web python manage.py migrate --noinput
$ docker-compose exec web python manage.py collectstatic --no-input --clear
$ docker-compose exec postgres psql --username=user --dbname=web_dev
$ docker-compose exec postgres psql --username=root --dbname=web_prod
$ docker-compose exec nginx ls /home/app/web

$ docker-compose -f docker-compose.prod.yml down -v
$ docker-compose -f docker-compose.prod.yml build
$ docker-compose -f docker-compose.prod.yml up -d --build
$ docker-compose -f docker-compose.prod.yml up -d --build web
$ docker-compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
$ docker-compose -f docker-compose.prod.yml exec web python manage.py createsuperuser
$ docker-compose -f docker-compose.prod.yml exec web python manage.py collectstatic --no-input --clear


## Local Environment
$ mkdir -p /Users/yhmun/OneDrive/Volumes/postgres
$ mkdir -p /Users/yhmun/OneDrive/Volumes/staticfiles
$ mkdir -p /Users/yhmun/OneDrive/Volumes/mediafiles

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/OneDrive/Volumes/postgres \
    --opt o=bind postgres

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/OneDrive/Volumes/staticfiles \
    --opt o=bind staticfiles

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/OneDrive/Volumes/mediafiles \
    --opt o=bind mediafiles

## Production Environment
$ sudo mkdir -p /var/opt/volumes/postgres
$ sudo mkdir -p /var/opt/volumes/staticfiles
$ sudo mkdir -p /var/opt/volumes/mediafiles

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/postgres \
    --opt o=bind postgres

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/staticfiles \
    --opt o=bind staticfiles

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/mediafiles \
    --opt o=bind mediafiles