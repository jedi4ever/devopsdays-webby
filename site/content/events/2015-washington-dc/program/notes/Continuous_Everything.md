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

# Continuous Everything

Facilitator:   Justin Spencer

Scribe:  Joanne Garlow

Experiences of the people participating

* Jenkins for automated testing on pull requests
* Teamcity for automated testing on pull requests and deployment
* Jenkins and Ancilble  for deployments
* None but want to dive in
* Lab environment for real time testing (not production)
* Sales
* Jenkins and Sonar
* Chef and Docker
* Continuous integration with Jenkins moving toward continuous deployment
* Jenkins as a try server to run the tests in the cloud
* Partial continuous integration
* Want to learn more about continuous integration in general but particularly how it relates to infrastructure
* Database continuous integration / deployment

How many people version control everything (code, database, environments, infrastructure) ?   maybe 15%

Database issues

* Database migrations as part of deployment
* complications around databases shared by multiple systems
* Rollback options and testing rollbacks
* Limit access to databases by requiring the use of APIs instead of going right to the database

Automated Testing is difficult but important

Rollback or roll forward when issues in deployment -

*  most people go for roll forward  
* when hitting failures, you have to always start all the way from the chef build of the system
* No direct access to servers - always use the configuration management
* deployment has to be reproducable  
* How fast can you spin up your stack?  It depends
* Autoscaling got some buy in from management - big win on savings
