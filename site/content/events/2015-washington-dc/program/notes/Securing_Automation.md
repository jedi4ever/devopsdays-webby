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

# Securing Automation

Scribe: Greg Elin

### Questions/Conversation
What concerns are people having with doing security in their devops?
* like what are you doing with securities,
* uploading keys to git hub by accident,
* who has it working- Is i hardening information available for apps above application
* Is security interestroducing extra cost.

### How do you protec the CI pipeline itself?


### Practices
* Use Tripwire to capture what files have been changed, automatically get list of changed files, send changed files to Dev to validate that the deployment responsible for those changes
* Walmart Security Champions (How Information Security Provided Booster Rockets for Walmart Labs Agile Transformation - https://www.youtube.com/watch?v=ak66A_iHHqw&index=2&list=PLLeSO3RXTSFOcBWgfczZAZPDi6AAD1rfz)
* Separation of concerns by using specialized different Docker containers for security-related functions (e.g., logging). Interesting how Docker became a medium of collaboration across different silos as different roles created containers to support their functions. Security owning proxy and communication point between containers, servers. (via session at Container Days Boston)

### Tools

* STIGMA
* OWASP Dependency Check (Jenkins Plugin)
* Summon
* OpenSCAP
* GovReady
* SonaType
* Conjure -

### Resources

* DevOps Audit Defense Toolkit - http://bit.ly/DevOpsAudit


Article - http://www.darknet.org.uk/2015/06/agile-security-how-does-it-fit-into-a-world-of-continuous-delivery/

### Participant List
* (Add your name below so we can find each other - share name or twitter or email as comfortable)

* Greg Elin (gregelin@gitmachines.com)
* M. Kyle Mueller (@_kylemueller mkylemueller+gmail.com)
* Dustin Collins (@dustinmm80, dustin.collins@conjur.net)
