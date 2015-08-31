#!/usr/bin/env bash

sudo apt-get update
sudo apt-get upgrade -y
sudo apt-get install -y apache2 curl libonig-dev libxml2-dev libxslt-dev git git-doc

curl https://raw.githubusercontent.com/fesplugas/rbenv-installer/master/bin/rbenv-installer | bash

sed -i '$ a\\nexport RBENV_ROOT="${HOME}/.rbenv"\n\nif [ -d "${RBENV_ROOT}" ]; then\nexport PATH="${RBENV_ROOT}/bin:${PATH}"\neval "$(rbenv init -)"\nfi\n\n' ~/.profile
source ~/.profile

rbenv bootstrap-ubuntu-12-04
CONFIGURE_OPTS=--without-tk rbenv install 1.8.7-p370
rbenv rehash
rbenv global 1.8.7-p370
gem install bundler

cd /vagrant
bundle install
cd site
webby build

sudo rm -rf /var/www
sudo ln -fs /vagrant/site/output/ /var/www
sudo /etc/init.d/apache2 stop
sudo /etc/init.d/apache2 start
