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

# Role of QA in CD

Facilitator:Jonathan Davila

Scribe:Fen Labalme


* Testing from developers and clients
* Bottleneck from Development to Production
* Nothing goes production without people manually looking at it
* QA on Dev -> Integration -> Stage, but not on Production
* O'Reilly series of Videos on CD - Neil Ford
* Selenium, Behat, Cucumber
* Tests on production can't be destructive
* API testing in FireEye (python) or Blazemeter - contract checking
* API - Pyhon requests library
* When a deloyement fails, new test created before release to catch regressions
* Who is responsible for a failed test? committer and reviewer, but in big teams can be hard
* Seed data migrated in can help repeatability
* OpenStack infrastructure
* Docker can help by standardizing development environment
