##
# Use outside docker container
##

PWD=$(shell pwd)
IMAGE=pietrojs/devopsdays-webby

docker_build_site:
	docker run --rm -it \
		-v ${PWD}:/opt/devopsdays \
		${IMAGE} make webby_build

docker_run_site: docker_stop_site
	docker run -d --name devopsdays-webby \
		-p 80:80 \
		-v ${PWD}/site/output:/var/www/html \
		${IMAGE} /usr/sbin/apache2ctl -D FOREGROUND

docker_build_image:
	docker build -t=${IMAGE} .

docker_stop_site:
	docker stop devopsdays-webby || true
	docker rm devopsdays-webby || true

##
# Use inside docker container
##

webby_build:
	cd site && webby rebuild
