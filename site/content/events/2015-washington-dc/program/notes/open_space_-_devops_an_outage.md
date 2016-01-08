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

# Devops and Ninja an Outage

Facilitator:

Scribe: kyle mueller


contact
M Kyle Mueller - @_kylemueller
questions
is the answer automating failovers

is there anything for peer point between 2sites how to force fight.

Depends on the outage


cloud
Treat as non-peramanent  - possible with hardware

Physical
- Find the redundancy
-Peers fighting with each other

Networks
trouble detecting peers and ISPs
metrics from users , from network
akamai backbone cross internet and bounce , can go horrible wrong


Alerting
what can you catch with alerting and monitoring, where is the value in monitoring to little or two much, no reaction after or before.
Informational alerts - id like to know when it happens but i cant do anything about it

Other
graceful degredation - software service inteliegently communicated to each other  

retrospectives - can we improve or gain quick resolution to repair if happens again.

Internal management - ie twitter failwail
CDN 404 based  page admit to being down or having issues

Block possible with dam to waterfall issue to allow fix of down issue

automatic remmediation

apply the pain where it needs to go , dont look back at best practices, do them.  All pains are ours.
Loud alerting on service or application  point to dev

internal service/app built with health check

microservices, health checks internal to application - and its connections
