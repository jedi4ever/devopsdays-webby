FROM ubuntu:14.04

RUN apt-get update
RUN apt-get install \
    libonig-dev \
    gawk \
    g++ \
    gcc \
    make \
    libc6-dev \
    libreadline6-dev \
    zlib1g-dev \
    libssl-dev \
    libyaml-dev \
    libsqlite3-dev \
    sqlite3 \
    autoconf \
    libgdbm-dev \
    libncurses5-dev \
    automake \
    libtool \
    bison \
    pkg-config \
    libffi-dev \
    unzip \
    wget \
    libxslt-dev \
    libxml2-dev \
    apache2 \
    -y

RUN apt-get install \
    gcc-4.4 \
    g++-4.4 \
    -y

RUN wget http://cache.ruby-lang.org/pub/ruby/1.8/ruby-1.8.7-p374.tar.gz
RUN tar -xzvf ruby-1.8.7-p374.tar.gz
RUN cd ruby-1.8.7-p374 && ./configure
RUN cd ruby-1.8.7-p374 && make CC=gcc-4.4
RUN cd ruby-1.8.7-p374 && make install

RUN wget http://production.cf.rubygems.org/rubygems/rubygems-1.3.7.tgz
RUN tar -xzvf rubygems-1.3.7.tgz
RUN cd rubygems-1.3.7 && ruby setup.rb

COPY . /opt/devopsdays
WORKDIR /opt/devopsdays

RUN gem install bundler
RUN bundle install
RUN cd site && webby build
RUN rm -rf var/www/html
RUN cp -r site/output/* /var/www/html/
