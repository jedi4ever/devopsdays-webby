This code used to drive the devopsdays.org website. We migrated to https://github.com/devopsdays/devopsdays-web/ on 2016-05-07.

Everything below is left for historical interest.

Thanks to everyone who's worked on the site!


----

It uses webby as a framework:

# Installation
## Get the source
`$ git clone git@github.com:jedi4ever/devopsdays-webby.git`

## Install with docker
If you have docker you can be up and running very quickly. A docker image has been pushed to [docker hub](https://hub.docker.com/r/pietrojs/devopsdays-webby/) with all the dependencies packaged in the image.

### Run the site
`make docker_run_site`

### Build the site
`make docker_build_site`

### Create a new docker image
`make docker_build_image`

## Install native dependencies

### On RedHat/CentOS/Fedora:
`$ yum install oniguruma oniguruma-devel`
`$ yum install libxslt libxml2 libxslt-devel libxlm2-devel`

### On Debian/Ubuntu:
`$ apt-get install libonig-dev`

### On Macosx
`$ brew install oniguruma`

### On Windows
See [README-Windows](README-Windows.md) for using webby on Windows operating systems


## If you use RVM

- there is a .ruby-version file that selects "ruby-1.8.7"
- and a .ruby-gemset file creates a new gemset "devopsdays-webby"

## If you use rbenv + OSX 10.8+

- Install Xcode 4.4+
- Install developer tools (Xcode preferences > Additional downloads)
- Install gcc-42 with [hombrew/dupes](https://github.com/Homebrew/homebrew-dupes/)
- Install [XQuartz](http://xquartz.macosforge.org/)

### Install Ruby

     $ brew install https://raw.github.com/Homebrew/homebrew-dupes/master/apple-gcc42.rb
     $ brew install rbenv
     $ brew install ruby-build
     $ CONFIGURE_OPTS=--without-tk rbenv install 1.8.7-p370

### Get the source

`$ git clone git@github.com:jedi4ever/devopsdays-webby.git`

### Enter the directory

`$ cd devopsdays-webby`

### Install bundler

`$ gem install bundler`

### Do a bundler install; this will install the necessary gems (see Gemfile)

`$ bundle install`

## If you don't have RVM installed

    $ source devopsdays-webby.ENV
    $ gem install bundler
    $ bundle install

# Using it
All interactions are done with the webby command, for this you need to be inside the 'site' directory


### Continuously build the website

     $ cd site
     $ webby autobuild

### Build the website

     $ cd site
     $ webby build

### rebuild the website

     $ cd site
     $ webby rebuild

For more information on how to use webby
[http://webby.rubyforge.org/](http://webby.rubyforge.org/)

