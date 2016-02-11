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

# Single Source of Truth

Facilitator:

Scribe: Lucas Yamanishi


Problems:  
* Many sources of truth can lie
* Some truths are inherantly distributed
* New sources of truth grow organicly
* Querying machines over and over can be wasteful

Ideas:  

- Google Image Search can be useful for finding reference architecture diagrams
- Sometimes it's better to not track a truth than to track it in a central DB
- Audit logs! They record information as it happens, including changes. Query them for a snapshot of truth.
- Remove the human aspect
- Everybody in an organization should be able to update their portion of the data
- The "single source" needs to be modular


Software products:  

- Racktables
- Hiera
- DNS
- Collins (from Tumblr)
- ElasticSearch
- OSQuery
