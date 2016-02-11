---
extension: html
filter:
  - erb
  - markdown
title: Program
dirty: true
layout: event_washington_dc
platinum: false
---

# Container Monitoring

Facilitator: Dwayne Hoover and Christian Beedgen

Scribe:Dwayne Hoover

container to monitor containers
* cadvisor

newer releases of Docker - docker stats

what about logging

* all processes wiritng to syslog to one container

Correlation and aggregation - monitoring containers as you spin up the same image on a new machine

* is the same image a new monitoring stream?
* what about historical analysis
* one example using statsd, give the metric a prefix can then do historical analysis based on image name/tag/etc

Tying this back to the container host?

* Common practice to tracking by host?
* App monitoring w/ StatsD
* Host monitoring with something else
* Cloud watch
* Sometimes manual to tie these together
* Is it a big enough problem to start correlating the data?
* pain is growing
* hesitant to accept "if there aren't metrics, then it's not a problem"

ACS - amazon container service, anyone using it

* complaint that it isn't particular mature
* particularly around autoscaling
* detecting issues - spinning up new containers
* dedicate a number of ec2 instances to ACS
* what amount of ec2 do you want to dedicate?
* there is an API
* no real abstraction of the host information

Docker on elastic beanstalk

Anyone using something to orchestrate container deployment - any additional metrics available because of it?

* Marathon - used to run/schedule containers
* mesosphere - interested, but they haven't built anything

One metrics collecter per (parent) host

New relic launched docker monitoring

How does a container know where to direct stats?

* statsd agent w/ config for destination

Solve the problem with service discovery - think MX record/using DNS to direct

Sumo Logic uses ZooKeeper

Abstraction - statsD sends container logs

* meta tools/deployment tools map the destination to the build
* drop a single container, will monitor containers and attach to the log processes via docker control port
* docker control port mapped to a container is given "super root" and can run processes in other containers
* company called hitrust to enforce RBAC via API - perhpas Docker needs to implement something
* using environment variables to pass in stats location

What are people using?

* Librato
* Ganglia
* Graphite
* Sumo Logic
