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

# Docker Overview: What it is, why it is important, and how folks are using it.

Facilitator: John Willis

Scribe: Johnny Mohseni

* Overview and history of how it came to be.
* Who uses it and how discussion
* CoreOS + Docker = CoreOS allows fast updates/patches since it is bare minimum needs and Docker holds the meat of the application needs.
* NewRelic - whole infrastructure runs on Docker
* Security updates for containers - Separates it into Application concern vs. CoreOS.  Isolation by container let’s you focus on apps for that container vs. the inter-play and dependencies on an OS that has multiple apps on it.
* Best Practice for good hygiene of docker images.  Build your own image; don’t blindly trust public images.
* Immutable Infrastructure discussion around version control philosophy of Docker; Guilt (sp?) company does this
* Immutable delivery - When developer pushes that is the whole stack ready to go with some meta data.  Capital One is doing this as well.
* Docker in Docker (missed the theme here but it was using Docker to create Docker images perhaps).
* Lots of CoreOS on bare metal (Google is one) suggestions.
* John Willis ever week puts info on the Docker Blog: https://blog.docker.com/author/john-willis/
* Opacity - visibility into the container (what does it contain) as it moves down the supply chain.  Docker/John/Josh thinking of creating and publishing 100% verifiable Docker binaries for use.
* Gene Kim’s DevOps enterprise - John/Josh presenting
* Order Matters - Turing Machine paper/book related to Immutability of deployments, application infrastructure, and containerization
* How are folks managing credentials in Docker?  HashiCorp created Vault.  Couple of good solutions out there for managing secrets and folks rolling their own but guidance was to check out Vault
* ACTION: Cron Jobs - CoreOS good way; John Willis will tweet out some info on this
