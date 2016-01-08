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

# Continuous Delivery  

Facilitator:

Scribe:  Joanne Garlow

Conversation started around continous testing as part of continous delivery

* Mocking out services that are used in testing so you can test end to end without that dependencies - virtual services
* Performance testing while using virtual services can save a lot of money and time by faking out the most expensive components

Plus provisioning of the environments

Whole tool chain

* TDD
* Continuous integration
* automated system configuration
* cloud environments

Anyone doing continous delivery ?  No one said yes

Change management requiring board approval - big blocker continous delivery

You need at least one person at the top to get on board and then show them how small changes can go

Hudson scripts to do the entire process from initializing the AWS servers to deploying the application

Extending hudson or jenkins to do full release automation tends to push their limits  

CA release automation is a tool recommended

Test data on demand is another challenge

Automatic production feedback for continous delivery - A/ B testing - deploying to small numbers

Where do you start?

* writing automated tests
*

What is the hardest part?

* Getting the right people
* So much psychology / empathy in DevOps

Architectures for continuous delivery
http://devops.com/2015/04/22/31-reference-architectures-devops-continuous-delivery/

Test Automation

* Jasmine
* Junit
* DBUnit
* Casper - Mocha
* PHP Unit
* Raintree
