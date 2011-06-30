This the source of the devopsdays.org website

It uses webby as a framework:

# Installation
## Get the source
`$ git clone git@github.com:jedi4ever/devopsdays-webby.git`

## If you use RVM

- there is an .rvmrc that select ruby-1.8.7
- and creates a new gemset devopsdays-webby

Get the source

`$ git clone git@github.com:jedi4ever/devopsdays-webby.git`

Enter the directory

`$ cd devopsdays-webby`

Install bundler

`$ gem install bundler`

Do a bundler install; this will install the necessary gems (see Gemfile)

`$ bundle install`

## If you don't have RVM installed

`$ . devopsdays-webby.ENV`

`$ gem install bundler`

`$ bundle install`

# Using it
All interactions are done with the webby command, for this you need to be inside the 'site' directory
`$ cd site`

webby autobuild          # Continuously build the website
webby build              # Build the website
webby rebuild              # Build the website

For more information on how to use webby
[http://webby.rubyforge.org/](http://webby.rubyforge.org/)

