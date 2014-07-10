This the source of the devopsdays.org website
It uses webby as a framework:

# Installation
## Get the source
`$ git clone git@github.com:jedi4ever/devopsdays-webby.git`

## Install native dependencies

### On RedHat/CentOS/Fedora:
`$ yum install oniguruma oniguruma-devel`

### On Debian/Ubuntu:
`$ apt-get install libonig-dev`

### On Macosx
`$ brew install oniguruma`

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

