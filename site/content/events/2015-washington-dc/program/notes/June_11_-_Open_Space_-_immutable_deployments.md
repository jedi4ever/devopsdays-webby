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

# Immutable Deployments

Facilitator: Matt Brown

Scribe: Ameer M.

- What is an 'immutable deploy' ?
* zero-downtime deployments
* replacing components like packages/containers/servers rather than updating them.
* automation and versioning are key

- Dev troubleshooting concerns in Immutable environments:
* take the immutable server/container out of production for troubleshooting.
* servers are always cattle, not pets

- Challenges in moving from a traditional deployment system to immutable deploys:
* Immutable infrastructure is essential for immutable deployments
* Architect around existing infrastructure
* OR, architect a new immutable environment

- Levels of immutability:
1- app
2- VM/container/server
3- Entire stack (ex: Cloud Formation)

Where to store states/data ?
* HA, persistent and reliable storage: in AWS (EBS / RDS / Dynamo DB

Tools:
Packer
docker, CoreOS
AMI build systems
Drone
Chef
Mesos
Jenkins
