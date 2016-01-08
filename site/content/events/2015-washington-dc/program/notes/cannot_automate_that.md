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

# You can't Automated That

Facilitator:  David Goade

Scribe:Joanne Garlow

Test automation is the most important part but it can be hard

Web pages testing for example
*Rainforest is a good option - allows humans to test for you but you pay per test and it's pretty cheap
*Pixel based tools ?  No one came forward saying they used it
*Javascript automated tests can be helpful
*Testing video and audio testing

Useability testing

*Drunk testing!  http://theuserisdrunk.com/

*Challenges of starting to write backend testing
*3rd party OTS software that wasn't designed for automation (no headless installs)
*Oracle was an example but people have set up automated installations with Oracle

*Be careful of automating (and making it too easy) to create nodes where you pay for each node

*Everyone wants to automate documentation but it is almost impossible
*Worst than no documentation is out of date documentation
*Keep the documentation as close to the code as possible
*Git's per directory documentation
*readme including the automation code
*behavior driven tests can be almost documentation for the application when it is more end user focused

Penetration tests
*You almost need humans to do surprising things to test this
*Automated tests can confirm that known issues remain fixed
*Firms that can be hired too  (recommended to hire a red team at some point)

Automated the easy things and knock them out first, free up yourself for the hard problems

Databases
*Redgate - database as code
*Oracle - learn to configure it, control it,
*Contious delivery for database - tests and schema as code
*Try using DBDeply - an open source project - all chages as a delta script
*Developers can be too far away from how the database really works and write bad code because of it


How to keep your test systems fresh and consistent as live
*Copying from live
*Copying subsets from live
*Copying only schema from live

Automation shouldn't be your day job - you should be focused more on the hard stuff

Load testing
*Best if your server farm has no special configurations
*But sometimes testing on live is the only feasible option when replicating the live configuration
*Delfix was suggested

Creating and maintaining automation scripts shouldn't be your day job

Use your really smart developers to do rote tasks - decreases moral and they tend to be really bad at it because they are bored
